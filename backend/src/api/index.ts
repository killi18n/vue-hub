import Router from 'koa-router';
import github from './github';

const router = new Router();

router.use('/github', github.routes());

export default router;
