import { Injectable } from '@angular/core';
import { api } from '../models/api/User';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http : HttpClient,
              private _httpService : HttpService) { }

  queryUsers() : Observable<Array<api.User>> {

    let usersQueryObserver : any;
    const result = new Observable<Array<api.User>>((observer) => {
      usersQueryObserver = observer;
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this._httpService.get<Array<api.User>>(`/api/auth/users`, httpOptions)
      .subscribe( (response: object) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });

    return result;

    // return [
    //   new User('some id', 'some username'),
    //   new User( 'second id', 'another username')
    // ];
  }
}
