import { Component, OnInit, Input } from '@angular/core';
import {AuthService, AuthStatus} from "../../../app/services/auth.service";
import {User} from '../../../app/models/User';

@Component({
  selector: 'auth-section',
  templateUrl: './auth-section.component.html',
  styleUrls: ['./auth-section.component.scss']
})
export class AuthSectionComponent implements OnInit {

  constructor(private _authService : AuthService) {
  }

  private _authStatus : AuthStatus;

  ngOnInit() {
    this._authService.authStatus.subscribe((status) => {
      this._authStatus = status;
      console.log(`new status : ${status}`);
    });
  }

  public get notAuthenticated() : Boolean {
    return this._authStatus == AuthStatus.notAuthenticated;
  }

  public get authenticating() : Boolean {
    return this._authStatus == AuthStatus.authenticating;
  }

  public get authenticated() : Boolean {
    return this._authStatus == AuthStatus.authenticated;
  }

  public get currentUser() : User {
    return this._authService.currentUser;
  }
}
