import { ApiRequest, RotiroError, RouteConfig } from 'rotiro';
import { addUser, getUsers, populateUsers } from '../../services/users';

export const usersConfig: RouteConfig = {
  methods: {
    GET: {
      controller: getController
    },
    POST: {
      query: { populate: { type: 'string', optional: true } },
      body: {
        name: { type: 'string', optional: true },
        age: { type: 'number', optional: true }
      },
      controller: postController
    }
  }
};

async function getController(apiRequest: ApiRequest): Promise<void> {
  const users = await getUsers();
  apiRequest.send(users);
}

async function postController(apiRequest: ApiRequest): Promise<void> {
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
  } else {
    throw new RotiroError('Something went wrong');
  }
}
