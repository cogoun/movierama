import { Component, ChangeDetectorRef } from '@angular/core';
import { SessionStorageService } from 'ngx-store';
import { User } from './user';
import { CurrentUserChangedService } from './current-user-changed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movierama';
  loggedInUserName = "";
  loggedInUserId = -1;
  loggedIn: boolean = false;

  constructor(private currentUserService: SessionStorageService, 
    private currentUserChangedService: CurrentUserChangedService, 
    private cd: ChangeDetectorRef) {
    // var loggedInUser: User = this.currentUserService.get('loggedInUser');
    // if (loggedInUser) {
    //     this.loggedInUserName = loggedInUser.name;
    //     this.loggedInUserId = loggedInUser.id;
    //     this.loggedIn = true;
    // }
    this.currentUserChangedService.loggedInUser$.subscribe(
      loggedInUser => {
        if (loggedInUser && loggedInUser.id >= 0) {
          this.loggedInUserName = loggedInUser.name;
          this.loggedInUserId = loggedInUser.id;
          this.loggedIn = true;  
        } else {
          this.clearLoggedUser()
        }
      });    
  }

  ngAfterViewInit() {
      this.cd.detectChanges();
  }

  clearLoggedUser() {
    this.loggedInUserName = "";
    this.loggedInUserId = -1;
    this.loggedIn = false;
  }
}
