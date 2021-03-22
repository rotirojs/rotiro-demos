import { search } from '../../services/users';

export const searchConfig = {
  methods: {
    GET: {
      query: { q: { type: 'string' } },
      controller: getController
    }
  }
};

async function getController(apiRequest) {
  if (apiRequest.valid) {
    const users = await search(apiRequest.query.q.value);
    apiRequest.send(users);
  }
}
