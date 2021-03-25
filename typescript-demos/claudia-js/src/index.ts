import { addRoutes } from '@rotirojs/rotiro-claudiajs';
import ApiBuilder from 'claudia-api-builder';
import { Api } from 'rotiro';
import { createApi } from './api-definitions';

const apiBuilder: any = new ApiBuilder();

apiBuilder.corsHeaders('Content-Type,X-Api-Key,X-Api-Version,AuthToken');

const api: Api = createApi();

addRoutes(apiBuilder, api);

export = apiBuilder;
