import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http/src/params";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _token : string;

  constructor(private _http : HttpClient ) {
  }

  public get token() : string {
    return this._token;
  }

  public set token(value : string) {
    this._token = value;
  }

  public post<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    options = options || {};
    options.headers = this.httpHeaders

    return this._http.post<T>(
      url, body, options
    );
  }

  public get<T>(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    const httpOptions = {
      headers: this.httpHeaders
    };

    return this._http.get<T>(url, httpOptions);
  }

  protected get httpHeaders() : HttpHeaders {
    let headers = new HttpHeaders();

    headers = headers.append('Content-type', 'application/json');

    if (this._token) {
      headers = headers.append('authorization', `Bearer ${this._token}`)
    }

    return headers;
  }
}
