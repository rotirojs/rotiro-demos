import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Api } from 'rotiro';
import { expressRouter } from '@rotirojs/rotiro-express';
import { createApi } from '@rotirojs/api-demo';
/*
 * This project is a simple example demonstrating how to build an API with Rotiro.
 */

const port: number = 3000;
const app = express();

// Add the body parser middleware to Express, without this no body data will be passed to the api
app.use(bodyParser.json());

// Create a fully configured api
const api: Api = createApi();

// Add the api as middleware to the Express app instance
app.use(expressRouter(api));

// Start the api
app.listen(port, () => {
  /* tslint:disable */
  console.log(`listening on ${port}`);
  /* tslint:enable */
});
