import { Api, ApiRequest } from 'rotiro';

export function createApi(): Api {
  const api = new Api();

  api.routes.add('ping', '/ping', {
    methods: {
      GET: {
        controller: (apiRequest: ApiRequest) => {
          apiRequest.send('Pong at ' + Date.now());
        }
      }
    }
  });

  api.routes.add('users', '/users', {
    methods: {
      GET: {
        controller: (apiRequest: ApiRequest) => {
          apiRequest.send([
            { name: 'Alex' },
            { name: 'Georgina' },
            { name: 'James' }
          ]);
        }
      },
      POST: {
        controller: (apiRequest: ApiRequest) => {
          const name: string = apiRequest.body.name.value;
          apiRequest.send({ name });
        },
        body: { name: { type: 'string' } }
      }
    }
  });

  api.build();

  return api;
}
