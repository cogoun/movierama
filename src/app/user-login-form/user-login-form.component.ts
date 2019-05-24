import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {

  model = new User(0, '', '');

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/movies']);
  }

  ngOnInit() {
  }

}
