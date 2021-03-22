# Rotiro Express Api Demo

This repo demonstrates how to define and implement a basic crud api with Express.

## Getting Started

Cone the repo and run 
```bash
yarn install
```

followed by

```bash
yarn start
```

## About the demo
This demo includes a CRUD style api structure for adding and managing some users.
The data is stored in memory and will be lost everytime the api is restarted/rebuilt.

The endpoints should be fairly self explanatory. They also include an option to populate the user list and search the user list.

The services that drive the api are not intended to be robust examples and are only intended to demonstrate how to hook up the api.

All the services have been written as promises since this is more likely to be how your api will behave when calling a backend data source


## Postman Files
To help test the api there is a postman configuration file which includes the mappings to all the api endpoints along with some basic payload.

