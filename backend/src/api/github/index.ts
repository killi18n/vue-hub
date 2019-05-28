import Router from 'koa-router';
import * as githubCtrl from './github.ctrl';

const router = new Router();

router.post('/authenticate', githubCtrl.authenticate);

export default router;
