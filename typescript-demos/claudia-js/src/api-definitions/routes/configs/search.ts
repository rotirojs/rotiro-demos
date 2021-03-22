import { search } from '../../services/users';
import {ApiRequest, RouteConfig} from 'rotiro';

export const searchConfig: RouteConfig = {
  methods: {
    GET: {
      query: { q: { type: 'string' } },
      controller: getController
    }
  }
};

async function getController(apiRequest: ApiRequest): Promise<void> {
  if (apiRequest.valid) {
    const users = await search(apiRequest.query.q.value);
    apiRequest.send(users);
  }
}
