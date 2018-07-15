import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {api} from '../models/api/login';

import { environment } from './../../environments/environment';


enum AuthStatus {
  notAuthenticated,
  authenticated,
  authenticating
}


@Injectable({
  providedIn: 'root'
})


class AuthService {
  private _authStatusObservable : Observable<AuthStatus>;
  private _authStatusObserver : any;
  private _currentUser : User;

  constructor(private _http : HttpClient ) {
    this._authStatusObservable = new Observable((observer) => {
      this._authStatusObserver = observer;
      observer.next(AuthStatus.notAuthenticated);
    });
  }

  public get authStatus() : Observable<AuthStatus> {
    return this._authStatusObservable;
  }

  public get currentUser() : User {
    return this._currentUser;
  }

  public authenticate(
    username: string,
    password: string
  ) {
    this._authStatusObserver.next(AuthStatus.authenticating);

    const login = new api.Login(username, password);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this._http.post<api.Login>(`/api/auth/login`, login, httpOptions)
      .subscribe((response) => {
        this._authStatusObserver.next(AuthStatus.authenticated);
        console.log(response);
      }, (error) => {
        this._authStatusObserver.next(AuthStatus.notAuthenticated);
        console.log(error);
      });

    // setTimeout( () => {
    //   this._currentUser = new User('', username);
    //   this._authStatusObserver.next(AuthStatus.authenticated);
    // }, 5000);
  }

  public signout() {
    this._authStatusObserver.next(AuthStatus.notAuthenticated);
  }
}

export { AuthService, AuthStatus };

