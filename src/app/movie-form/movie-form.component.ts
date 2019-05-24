import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  model = new Movie('Title', Date.now(), '', 0, 0, 'Guest');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/movies']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
