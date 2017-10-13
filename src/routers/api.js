import * as Router from 'koa-router';
import User from '../controller/user';

let apiRouter = new Router({
    prefix: '/api'
});

apiRouter.get('/', async(ctx) => {
    ctx.body = ctx.request.query
});

apiRouter.get('/user', async(ctx) => {
    console.log(User(ctx));
});

export default apiRouter = apiRouter;