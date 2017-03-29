// @flow
'use strict'
import Promise from 'bluebird'

module.exports.hello = async (event: any, context: any, callback: Function) => {
  await Promise.delay(10)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }
  console.log(process.versions)
  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
