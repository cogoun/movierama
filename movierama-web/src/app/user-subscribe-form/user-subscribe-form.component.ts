import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-subscribe-form',
  templateUrl: './user-subscribe-form.component.html',
  styleUrls: ['./user-subscribe-form.component.css']
})
export class UserSubscribeFormComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  model = new User(0, '', '');

  onSubmit() {
    // save the model
    this.userService.enroll(this.model).subscribe(enrolledUser => console.log(enrolledUser));
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
