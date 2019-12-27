const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');

const app = new koa();


app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);