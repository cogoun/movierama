import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-store';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movierama';
  loggedInUserName = "Guest";
  loggedInUserId = -1;

  loggedIn: boolean = false;

  constructor(private currentUserService: SessionStorageService) {
    var loggedInUser: User = this.currentUserService.get("loggedInUser");
    if (loggedInUser) {
        this.loggedInUserName = loggedInUser.name;
        this.loggedInUserId = loggedInUser.id;
        this.loggedIn = true;
    }    
  }
}
