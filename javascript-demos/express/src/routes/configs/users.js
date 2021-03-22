import { addUser, getUsers, populateUsers } from '../../services/users';
import {RotiroError} from "rotiro";

export const usersConfig = {
  methods: {
    GET: {
      controller: getController
    },
    POST: {
      query: { populate: { type: 'string', optional: true } },
      body: {
        name: { type: 'string' },
        age: { type: 'number' }
      },
      controller: postController
    }
  }
};

async function getController(apiRequest) {
  const users = await getUsers();
  apiRequest.send(users);
}

async function postController(apiRequest) {
  if (apiRequest.valid) {
    if (apiRequest.query.populate.valid) {
      const users = await populateUsers();
      apiRequest.send(users);
    } else {
      const user = await addUser(
        apiRequest.body.name.value,
        apiRequest.body.age.value
      );
      apiRequest.send(user);
    }
  }else{
    throw new RotiroError('Something went wrong')
  }
}
