import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";


@Component({
  selector: 'auth-user-login',
  templateUrl: './auth-user-login.component.html',
  styleUrls: ['./auth-user-login.component.scss']
})
export class AuthUserLoginComponent implements OnInit {

  private _username : string = '';
  private _password : string = '';

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  public get canSignIn() : Boolean {
    return this.username != '' && this.password != '';
  }

  public get username() : string {
    return this._username;
  }

  public set username(value : string) {
    this._username = value;
  }

  public get password() : string {
    return this._password;
  }

  public set password(value : string) {
    this._password = value;
  }

  public onSignIn() {
    this._authService.authenticate(this.username, this.password);
  }
}
