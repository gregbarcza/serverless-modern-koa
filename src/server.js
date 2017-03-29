// @flow
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
const app = new Koa()

app.use(bodyParser())

// response
app.use(async ctx => {
  const foo: string = 'bar'
  ctx.body = {foo, query: ctx.query, body: ctx.request.body}
})

export default app
