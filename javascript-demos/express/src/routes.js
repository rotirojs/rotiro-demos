import { Api } from 'rotiro';

// API definitions can be split up and written in many styles depending on what
// works for the project. Large projects may want to separate the config for each
// endpoint into separate modules to make it easier to read. Have a look at the
// https://github.com/rotirojs/api-demo repo for more examples of how to structure an api

export function createApi() {
  const api = new Api();

  api.routes.add('ping', '/ping', {
    methods: {
      GET: {
        // This controller example uses an inline function
        controller: apiRequest => {
          apiRequest.send('Pong at ' + Date.now());
        }
      }
    }
  });

  api.routes.add('users', '/users', {
    methods: {
      GET: {
        controller: getUsers
      },
      POST: {
        controller: addUser,
        body: { name: { type: 'string' } }
      }
    }
  });

  api.routes.add('user', '/users/:id', {
    path: { id: { type: 'string' } },
    methods: {
      GET: {
        controller: getUser
      },
      PUT: {
        controller: updateUser,
        body: { name: { type: 'string' } }
      }
    }
  });

  api.build();

  return api;
}

function getUser(apiRequest) {
  const userId = apiRequest.path.id.value;
  // return an example user
  apiRequest.send({ id: userId, name: 'Alex' });
}

function getUsers(apiRequest) {
  apiRequest.send([{ name: 'Alex' }, { name: 'Georgina' }, { name: 'James' }]);
}

function addUser(apiRequest) {
  const name = apiRequest.body.name.value;
  apiRequest.send({ id: '1', name });
}

function updateUser(apiRequest) {
  const userId = apiRequest.path.id.value;
  const name = apiRequest.body.name.value;
  apiRequest.send({ id: userId, name });
}
