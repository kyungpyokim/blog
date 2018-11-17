require('dotenv').config();
const mongoose = require('mongoose');

const { PORT: port = 4000, MONGO_URI: mongoURI } = process.env;

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((e) => {
    console.log(e);
  });
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

// router.get('/', (ctx) => {
//   ctx.body = 'Home';
// });

// router.get('/about', (ctx) => {
//   ctx.body = 'Introduce';
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});
