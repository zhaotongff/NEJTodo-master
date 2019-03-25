/**
y引入koa跟路由
 * Description: Koa的根路由
 */

module.exports = function(app) {
  const Router = require('koa-router');
  const router = new Router();
  router.get('/', async function(ctx, next) {
    await ctx.render('index');
  });

  require('./api/todo')(router);

  app.use(router.routes())
    .use(router.allowedMethods());
};