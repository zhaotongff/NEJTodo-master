/**

 * Description: Koa服务器端根目录
 */
//请求需要的模块  包括路由、服务器、数据库、路径等
const path = require('path')
  , Config = require('config-lite')
  , Koa = require('koa2')
  , Router = require('koa-router')
  , views = require('koa-views')
  , favicon = require('koa-favicon')
  , convert = require('koa-convert')
  , serve = require('koa-static2')
  , mongoose = require('./lib/mongo')
  /*创建KOA框架、路由、config信息*/
  , app = new Koa()
  , router = new Router()
  , basePath = path.resolve(__dirname, './')
  , config = Config(basePath);

//通过路径引入文件
app.use(views(path.join(basePath, 'views'), {
  extension: 'pug'
}));
//
app.use(convert(serve("static", path.join(basePath, 'public'))));
app.use(convert(favicon(path.join(basePath, 'public/favicon.ico'))));

app.use(async function(ctx, next) {
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

require('./routes/index')(app);

app.listen(config.port, function(){
  console.log(config.message);
});