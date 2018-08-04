import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/User";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {

  @Input() user : User;

  constructor(private _authService : AuthService) { }

  ngOnInit() {
    this.user = this._authService.currentUser;
  }

  public onSignOut() {
    this._authService.signout();
  }

}
