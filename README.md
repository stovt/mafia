<img src="https://storage.googleapis.com/varig-dev-x2g90hfsqr/logo.svg" width="200" alt="Varig" />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as the framework and [Apollo GraphQL Client](https://www.apollographql.com/docs/react/v3.0-beta/) for the API access.

## Prerequisites

**Node.js** interpreter (preferably version **11.7.0** or higher) and **npm** package manager must be installed in the system.

## Installation

After cloning the project, install its dependencies with this command:

```bash
npm install
```

Then you need to create your local copy of `.env` file.<br />
Just copy the defaults from `.env.example` like this:

```bash
cp .env.example .env
```

This file contains options like API url or Auth0 credentials.<br />
You have to fill these values in order to run the app.

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```bash
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

```bash
npm test
```

Runs the tests using [Jest](https://jestjs.io/).

```bash
API_TOKEN=<long_access_token> npm run graphql-codegen
```

Generates the [TypeScript](https://www.typescriptlang.org/) typings with [GraphQL Code Generator](https://graphql-code-generator.com/) and save them in `src/shared/types/graphql.ts`.

## Building docker image for dev purposes

```bash
  docker build -f Docker-dev -t varig-front:dev .
  docker run --env-file .env.dev -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm varig-front:dev
```
