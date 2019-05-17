const koa = require('koa');
const router = require('./routing');
const db = require('./database');


const app = new koa();
const PORT = 1234;

app
  .use(router.routes())
  .use(router.allowedMethods());

const start = async function() {
  try {
    await db.start();
    this.server = await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error){
    console.log(error)
  }
};

const close = async function() {
  await this.server.close();
  await db.close();
};

start();