# fake-rest-api
This project demonstrates how to create a fake REST API using [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker) and [json-server](https://github.com/typicode/json-server).

See my [blog post](https://medium.com/@jonjam/creating-a-fake-rest-api-with-json-server-817320239cde) for more details.

## Install

Install dependencies with:
```bash
npm i
```

or

```bash
yarn install
```

## Usage

Start the REST API with:
```bash
npm start
```

or

```bash
yarn run start
```

This will generate random data in `/buildScripts/db.json` and then serve it on a REST API on port 3000.
