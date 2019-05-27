import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private currentUserService: SessionStorageService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.currentUserService.clear('all');
  }
}
