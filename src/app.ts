import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as cors from 'koa-cors';
import { Sequelize } from 'sequelize-typescript';

import apiRouter from './routers/api.js';

const app = new Koa();
const rootRouter = new Router();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    name: 'casper-backend',
    username: 'root',
    password: '123456',
    modelPaths: [
        __dirname + '/models'
    ]
});

sequelize.sync({ force: true });
// root-router
app.use(rootRouter.routes());
// api-router
app.use(apiRouter.routes());


// root
rootRouter.get('/', async (ctx) => {
    ctx.body = 'hello world';
});

// 允许跨域请求.
app.use(cors({
    origin: '*'
}));

// 启动监听端口.
app.listen(3000);