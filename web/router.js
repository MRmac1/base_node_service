const Router = require('@koa/router');
const RedisController = require('./src/controller/redis')
const MysqlController = require('./src/controller/mysql')

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Koa-lib-test app';
});

router.get('/redis', RedisController.checkConnect);

router.get('/mysql', MysqlController.checkConnect);

module.exports = router