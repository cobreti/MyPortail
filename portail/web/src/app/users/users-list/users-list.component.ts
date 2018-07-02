import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public _users : Array<User>;

  constructor(
    private usersService : UsersService
  ) {

  }

  ngOnInit() {
    this._users = this.usersService.queryUsers();
  }

  public get users() : Array<User> {
    return this._users;
  }

}
