import { VercelRequest, VercelResponse } from '@vercel/node';
import app from './server';
import config from "./config/config";
import connect from './db/connect';

const PORT = config.app.PORT;

connect().then(() => {
    console.log("Connected to database!");
});

export default (req: VercelRequest, res: VercelResponse) => {
    return app(req, res);
};


