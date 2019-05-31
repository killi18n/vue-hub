import Router from 'koa-router';
import * as githubCtrl from './github.ctrl';

const router = new Router();

router.post('/authenticate', githubCtrl.authenticate);
router.get('/check', githubCtrl.check);

export default router;
