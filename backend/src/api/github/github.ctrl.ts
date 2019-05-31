import Joi from 'joi';
import axios from 'axios';
import { Context } from 'koa';

const { GITHUB_OAUTH_URL: OAuthURL } = process.env;

export const authenticate = async (ctx: Context) => {
    console.log('authenticate');
    const schema = Joi.object().keys({
        code: Joi.string().required(),
        clientId: Joi.string().required(),
        clientSecret: Joi.string().required(),
    });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        console.log(result.error);
        ctx.status = 400;
        return;
    }

    const { code, clientId, clientSecret } = ctx.request.body;
    try {
        if (OAuthURL) {
            const res = await axios.post(
                OAuthURL,
                {
                    code,
                    client_id: clientId,
                    client_secret: clientSecret,
                },
                {
                    headers: {
                        accept: 'application/json',
                    },
                }
            );
            const { data } = res;
            if (data) {
                ctx.status = 200;
                ctx.body = data;
                return;
            }
        }

        ctx.status = 400;
    } catch (e) {
        console.log(e);
        ctx.throw(e, 500);
    }
};

export const check = async (ctx: Context) => {
    const { authorization } = ctx.headers;
    if (!authorization) {
        ctx.status = 401;
        return;
    }
    try {
        const res = await axios.get('https://api.github.com/user', {
            headers: {
                authorization,
            },
        });

        ctx.body = res.data;
        ctx.status = 200;
    } catch (e) {
        console.log(e);
        ctx.throw(e, 401);
    }
};
