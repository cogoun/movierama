import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserChangedService {

  private currentUserSelectedIdSource = new Subject<string>();
  currentUserSelectedId$ = this.currentUserSelectedIdSource.asObservable()

  private loggedInUserSource = new Subject<User>();
  loggedInUser$ = this.loggedInUserSource.asObservable();

  constructor() { }

  selectUser(userId: string) {
    this.currentUserSelectedIdSource.next(userId);
  }

  logInUser(user: User) {
    console.log(user);
    this.loggedInUserSource.next(user);
  }  

  logoutUser() {
    this.loggedInUserSource.next(this.emptyUser());
  }

  emptyUser() : User {
    return new User(-1, '', '');
  }
}
