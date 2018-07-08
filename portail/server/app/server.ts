import * as express from 'express';
import * as Path from 'path';
import {Router} from "express";
import bodyParser = require("body-parser");
const request = require('request');
const httpProxy = require('http-proxy');
const http = require('http');

declare var process : {
    env: {
        PORT: number
    }
};

interface Headers {
    [key: string]: any;
}

const app: express.Application = express();
const router: Router = express.Router();
const port: number = process.env.PORT || 8000;
const path: string = Path.resolve('./../web/dist/portail');

console.log(`dirname : ${__dirname}`);
console.log(`path : ${path}`);

router.get('*', function(req, res){
    res.sendFile('index.html', { root: path + '/' });
});

app.use(bodyParser.urlencoded({extended:true}));// get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// app.use('/api/auth', (request, response, next) => {
//     proxy.web(req, res, {
//         target: 'http://your_blog.com'
//     }, next);});

app.use(express.static(path + '/'));

// app.use('/', express.static(path));

const proxy = httpProxy.createProxyServer();
app.all('/api/*', (req, res, next) => {
    const headers : Headers = {
        'content-type': req.headers['content-type']
    };

    const options = {
        host: '127.0.0.1',
        port: '8001',
        method: req.method,
        headers,
        path: '/api/login'
    };

    request.post({
        headers,
        url: 'http://127.0.0.1:8001/api/login',
        body: JSON.stringify(req.body)
    }, (error : any, response : any, body : any) => {
        console.log(error);
        console.log(response);
        console.log(body);

        // response.pipe(res);
        res.status(response.statusCode);
        res.send(response.body);
    });

    // const postReq = http.request(options, (apiRes : any) => {
    //     apiRes.setEncoding('utf8');
    //     apiRes.on('data', (data : any) => {
    //         console.log(data);
    //     });
    //     apiRes.on('error', (error: any) => {
    //         console.log(error);
    //     })
    // });
    // const data = {
    //     "username": "Admin",
    //     "password": "Admin@123"
    // };

    // postReq.write(JSON.stringify(req.body));
    // postReq.end();

    // proxy.web(req, res, { target: 'http://localhost:8001' });
    // const path = req.url.replace('/api/auth', '');
    // console.log(path);
    // const authUrl = `http://localhost:8001/api${path}`;
    // console.log(authUrl);
    // // const httpsUrl = `${this._serviceUrl}${req.url.replace('http', 'https')}`;
    // const x = request(authUrl);
    // req.pipe(x);
    // x.pipe(res);
});

app.use('/', router);

app.listen(port);
