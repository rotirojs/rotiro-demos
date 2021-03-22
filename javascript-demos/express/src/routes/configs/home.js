export const homeConfig = {
  methods: {
    GET: {
      controller: getController
    }
  }
};

function getController(apiRequest) {
  apiRequest.send(
    `
            <html lang="en-GB">
              <body>
                <h1>Home</h1>
                <p>This endpoint is not part of the api, although it demonstrates how to return html</p>
              </body>
            </html>`
  );
}
