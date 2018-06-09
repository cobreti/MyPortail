import * as express from 'express';
import * as Path from 'path';

declare var process : {
    env: {
        PORT: number
    }
};

const app: express.Application = express();
const port: number = process.env.PORT || 8000;
const path: string = Path.resolve('./../web/dist/portail');

console.log(`dirname : ${__dirname}`);
console.log(`path : ${path}`);

app.use('/', express.static(path));

app.listen(port);
