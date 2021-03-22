export const pingConfig = {
  methods: {
    GET: {
      controller: getController
    }
  }
};

function getController(apiRequest) {
  apiRequest.send(`Pong : ${Date.now()}`);
}
