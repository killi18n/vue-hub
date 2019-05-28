import 'lib/env';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import api from 'api';

const { PORT: port = 4000 } = process.env;

const app = new Koa();

const router = new Router();
router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('app is running on port', port);
});
