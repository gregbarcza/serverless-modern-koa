import slsHttp from 'serverless-http'
import app from './src/server'
module.exports.index = slsHttp(app)
