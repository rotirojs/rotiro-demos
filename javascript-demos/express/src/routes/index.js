const { Api } = require('rotiro');
const {
  homeConfig,
  pingConfig,
  usersConfig,
  userConfig,
  searchConfig
} = require('./configs');

export function createApi() {
  const api = new Api();
  api.routes.add('home', '/', homeConfig);
  api.routes.add('ping', '/ping', pingConfig);
  api.routes.add('users', '/users', usersConfig);
  api.routes.add('user', '/users/:userId', userConfig);
  api.routes.add('search', '/search', searchConfig);

  api.build();
  return api;
}
