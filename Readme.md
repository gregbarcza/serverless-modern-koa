# Serverless modern koa starter kit

This hybrid template makes it easy to build koa apps what can be also run on AWS lambda or as a standalone koa server (or in Docker)

## Features
- Full ES6 support (node6 + CommonJS import/export module syntax)
- async/await
- flowtype
- eslint / prettier-eslint

## Usage
`npm i`

### To run it - dev mode:
`npm run dev`

### To run it - prod mode:
`npm run build`
`node dist/start`

### To deploy it on serverless:
As otherwise:
`sls deploy`

TODO:
- Testing examples
- Dockerize