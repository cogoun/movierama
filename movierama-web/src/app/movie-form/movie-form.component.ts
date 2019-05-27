import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../movie'
import { MovieService } from '../movie.service'
import { SessionStorageService } from 'ngx-store';
import { CurrentUserChangedService } from '../current-user-changed.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  model = new Movie('', '', '', 0, 0, 0, '', '');
  submitted = false;

  constructor(
    private router: Router, 
    private movieService: MovieService, 
    private currentUserService: SessionStorageService,
    private currentUserChangedService: CurrentUserChangedService) { }

  onSubmit() {
    this.model.postedByUserId = this.currentUserService.get('loggedInUser').id;
    this.submitted = true;
    this.movieService.submit(this.model).subscribe(submittedMovie => {});
    this.currentUserChangedService.selectUser('');
    this.router.navigate(['/movies']);
  }

  ngOnInit() {
  }

}
