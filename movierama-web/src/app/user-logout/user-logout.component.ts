import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-store';
import { CurrentUserChangedService } from '../current-user-changed.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private currentUserService: SessionStorageService,
    private currentUserChangedService: CurrentUserChangedService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.currentUserChangedService.logoutUser();
    this.currentUserService.clear('all');
  }
}
