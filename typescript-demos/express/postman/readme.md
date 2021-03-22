# Postman Api Demo

This folder contains a simple postman configuration for testing the api.
It's assumed that you have a basic knowledge of how to use Postman to test an api.

> Remember that the data is stored in memory and restarting/rebuilding the api will
> clear any session data. You can use the Populate User List request to add a list
> of users to the api

## Getting started
* Install and Run postman
* Import the collection
* Import the environment variables
* Run the api using ```yarn start```

## Running order
To test all the endpoints you can run the postman request in the following order.
The urls configured in postman should automatically set the parameters based on the environment settings however you can override any of the data or parameters.

* Get Users - ```http://localhost:3000/users```
* Add User - ```http://localhost:3000/users```
* Get User - ```http://localhost:3000/users/1```
* Update User - ```http://localhost:3000/users/1```
* Add User - ```http://localhost:3000/users```
* Get Users - ```http://localhost:3000/users```
* Delete User - ```http://localhost:3000/users/1```
* Populate User List - ```http://localhost:3000/users?populate```
* Search - ```http://localhost:3000/search?q=ar```
