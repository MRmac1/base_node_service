module.exports = {
  checkConnect: (ctx, next) => {
    ctx.body = 'Hello Koa-lib-test redis';
  }
}