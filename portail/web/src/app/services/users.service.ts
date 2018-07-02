import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  queryUsers() : Array<User> {
    return [
      new User('some id', 'some username'),
      new User( 'second id', 'another username')
    ];
  }
}
