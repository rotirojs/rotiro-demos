# Rotiro Claudia.js with an External API Demo

## Getting started
```bash
yarn install
```

This is not a comprehensive guide to using claudia.js and assumes some prior 
knowledge. You'll also need a basic understanding of the Api Gateway and how to 
test endpoints.

To try this example you will need an aws account and the credentials available 
through the environment variables.

> This example will be deployed in ```eu-west-1```. Update the deploy.sh file with a different region if required

If this is the first time you have run the example, run

```yarn create-api```

Any following updates should run

```yarn update-api```

> NOTE: Calling ```yarn create-api``` will throw an error because the service will have already been created

### Debugging
All the rotiro libraries use the debug library which allows additional debug
information to be displayed in the console. This is particularly useful when
testing lambda functions.

To activate debugging include ```"DEBUG": "rotiro:*"``` in the environment variables
Any logs should appear in cloudwatch
