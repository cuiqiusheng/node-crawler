const Koa = require('koa')
const crawler = require('./controllers/crawler')
const config = require('./config/config')

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = await crawler(config.DB)
})

app.listen('9923')
console.log('[demo] app is running at port 9923')
