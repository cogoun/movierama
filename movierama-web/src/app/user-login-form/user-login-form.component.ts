import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { SessionStorageService } from 'ngx-store';
import { CurrentUserChangedService } from '../current-user-changed.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {

  model = new User(0, '', '');

  constructor(private router: Router, 
    private userService: UserService, 
    private currentUserService: SessionStorageService,
    private currentUserChangedService: CurrentUserChangedService) { }

  onSubmit() {
    this.userService.login(this.model).subscribe(loggedInUser => {
      this.currentUserService.set('loggedInUser', loggedInUser);
      this.router.navigate(['/movies']);
      this.currentUserChangedService.selectUser('');
    });
  }

  ngOnInit() {
  }

}
