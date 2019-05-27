import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { SessionStorageService } from 'ngx-store';
import { Subscription }   from 'rxjs';

import { User } from '../user'
import { Movie } from '../movie'
import { CurrentUserChangedService } from '../current-user-changed.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] = [];
  user: User;

  sortByCurrent: string = '';
  sortOrder: number = 1;

  subscription: Subscription;

  constructor(
    private currentUserChangedService: CurrentUserChangedService,
    private movieService: MovieService, 
    private currentUserService: SessionStorageService) { 
      this.subscription = this.currentUserChangedService.currentUserSelectedId$.subscribe(
        currentUserSelectedId => {
          console.log('currentUserSelectedId'+currentUserSelectedId)
          if (currentUserSelectedId) {
            this.loadMoviesOfUser(currentUserSelectedId);  
          } else {
            this.loadMovies();
          }
        });
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.user = this.currentUserService.get('loggedInUser');
    this.movies.splice(0,this.movies.length)
    this.movieService
      .all(this.user.id)
      .subscribe(allMovies => {
        allMovies.forEach(movie => {
          this.calculateLinkDisplay(movie);
          this.movies.push(movie);
        });
      });
  }

  loadMoviesOfUser(submittedByUserId: string) {
    console.log("loadMoviesOfUser"+submittedByUserId);
    this.user = this.currentUserService.get('loggedInUser');
    this.movies.splice(0,this.movies.length)
    this.movieService
      .allByUser(this.user.id, Number.parseInt(submittedByUserId))
      .subscribe(allMovies => {
        allMovies.forEach(movie => {
          this.calculateLinkDisplay(movie);
          this.movies.push(movie);
        });
      });
  }

  sortIcon(sortByField: string) : string {
    if (this.sortByCurrent == sortByField && this.sortOrder > 0) return '+'; 
    if (this.sortByCurrent == sortByField && this.sortOrder < 0) return '-'; 
  }

  sortMovies(sortByNew: string) {
    if (this.sortByCurrent == sortByNew) 
      this.sortOrder *= -1;
    if (this.sortByCurrent != sortByNew) {
      this.sortOrder = 1;
      this.sortByCurrent = sortByNew;
    }
    this.sortByCurrent = sortByNew;
    this.movies.sort((a: Movie, b: Movie) => {
      if (a[this.sortByCurrent] > b[this.sortByCurrent]) return this.sortOrder;
      if (a[this.sortByCurrent] < b[this.sortByCurrent]) return -this.sortOrder ;
      return 0;
    });
  }

  calculateLinkDisplay(movie: Movie) {
    if (! movie.relationToRequestingUser) {
      movie.showHateLink = true;
      movie.showLikeLink = true;
      movie.showRetractLink = false;    
    } else if (movie.relationToRequestingUser == 'CREATED') {
      movie.showHateLink = false;
      movie.showLikeLink = false;
      movie.showRetractLink = false;
    } else if (movie.relationToRequestingUser == 'LIKED') {
      movie.showHateLink = true;
      movie.showLikeLink = false;
      movie.showRetractLink = true;    
    } else if (movie.relationToRequestingUser == 'HATED') {
      movie.showHateLink = false;
      movie.showLikeLink = true;
      movie.showRetractLink = true;    
    }      
  }
}
