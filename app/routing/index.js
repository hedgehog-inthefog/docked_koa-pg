const koaRouter = require('koa-router');
const database = require('../database');
const router = new koaRouter();

router.get('/', async (ctx) => {
  ctx.status = 200;
});

router.get('/test', async ctx => {
  ctx.body = await database.query('SELECT NOW() AS result;')
    .then(c => c.rows[0].result);
});

module.exports = router;