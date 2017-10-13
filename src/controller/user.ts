import {
    testUser
} from '../models/testUser';

interface UserModel {
    name: string;
    secret: string;
    password: string;
}

interface jsonModel {
    code: number;
    message: string;
    data: object;
}

export default function addUser(ctx) {
    let post_user = ctx.request.query;
    let user: UserModel;
    let resultJson: jsonModel;

    user = {
        name: post_user.name,
        secret: post_user.secret,
        password: post_user.password
    };

    new testUser(user).save();

    resultJson = {
        code: 200,
        message: 'create user ok.',
        data: {
            name: post_user.name
        }
    }

    ctx.body = JSON.stringify(resultJson);
}