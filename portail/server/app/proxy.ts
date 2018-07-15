import {Request, Response, NextFunction, RequestHandler} from "express";
const request = require('request');

interface Headers {
    [key: string]: any;
}

export class Proxy {

    constructor(private readonly _route : string,
                private readonly _redirectRoute: string = '') {
        if (this._redirectRoute != '' && !this._redirectRoute.endsWith('/')) {
            this._redirectRoute = `${this._redirectRoute}/`;
        }
   }

    public onPostRequet(url : string,
                        req : Request,
                        res : Response,
                        next : NextFunction) {
        const headers : Headers = {
            'Content-Type': req.headers['content-type'],
            'accept': req.headers['accept'],
            // 'origin': req.headers['origin'],
            'authorization': req.headers['authorization']
        };

        request.post({
            headers,
            url: `${this._redirectRoute}${url}`,
            body: JSON.stringify(req.body)
        }, (error: any, response: any, body: any) => {
            res.status(response.statusCode);
            res.send(response.body);
        });
    }

    public onPutRequest(url : string,
                        req : Request,
                        res : Response,
                        next : NextFunction) {

        request.put({
            headers: req.headers,
            url: `${this._redirectRoute}${url}`,
            body: JSON.stringify(req.body)
        }, (error: any, response: any, body: any) => {
            res.status(response.statusCode);
            res.send(response.body);
        });
    }

    public onGetRequest(url : string,
                        req : Request,
                        res : Response,
                        next : NextFunction) {

        const headers : Headers = {
            'Content-Type': req.headers['content-type'],
            'accept': req.headers['accept'],
            // 'origin': req.headers['origin'],
            'authorization': req.headers['authorization']
        };

        request.get({
            headers,
            url: `${this._redirectRoute}${url}`,
            body: JSON.stringify(req.body)
        }, (error: any, response: any, body: any) => {
            res.status(response.statusCode);
            res.send(response.body);
        });
    }

    public onDeleteRequest(url : string,
                           req : Request,
                           res : Response,
                           next : NextFunction) {

        request.delete({
            headers: req.headers,
            url: `${this._redirectRoute}${url}`,
            body: JSON.stringify(req.body)
        }, (error: any, response: any, body: any) => {
            res.status(response.statusCode);
            res.send(response.body);
        });
    }

    public handleRequest(req : Request,
                         res : Response,
                         next : NextFunction) {
        const url : string = req.url.substring(this._route.length);

        switch (req.method) {
            case 'POST': {
                this.onPostRequet(url, req, res, next);
            }
            break;
            case 'GET': {
                this.onGetRequest(url, req, res, next);
            }
            break;
            case 'PUT': {
                this.onPutRequest(url, req, res, next);
            }
            break;
            case 'DELETE': {
                this.onDeleteRequest(url, req, res, next);
            }
            break;
            default:
                next();
        }
    }

    public match(url : string) : boolean {
        return url.startsWith(this._route);
    }

    public get requestHandler() : RequestHandler {
        return (req, res, next) => {
            if (this.match(req.url)) {
                this.handleRequest(req, res, next);
            } else {
                next();
            }
        }
    }

    // public static createProxy() : RequestHandler {
    //     return (req, res, next) => {
    //         const routeExp = /^\/api\/(\w*)\/(.*)$/;
    //         const match = req.url.match(routeExp);
    //
    //         if (match && match.length == 3) {
    //         }
    //         else {
    //             next();
    //         }
    //     };
    // }
}
