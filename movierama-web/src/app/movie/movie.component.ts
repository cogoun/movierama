import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { User } from '../user';
import { MovieService } from '../movie.service';
import { SessionStorageService } from 'ngx-store';
import { CurrentUserChangedService } from '../current-user-changed.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private router: Router,
    private movieService: MovieService, 
    private currentUserService: SessionStorageService,
    private currentUserChangedService: CurrentUserChangedService) { }

  ngOnInit() {
  }

  onPostedByUserClick() {
    console.log(this.movie.postedByUserId.toString());
    this.currentUserChangedService.selectUser(this.movie.postedByUserId.toString());
  }

  likeMe() {
    var user:User = this.currentUserService.get('loggedInUser');
    this.movieService.like(user.id, this.movie.id).subscribe(result => console.log(result));
    this.movie.like();
  }

  hateMe() {
    var user:User = this.currentUserService.get('loggedInUser');
    this.movieService.hate(user.id, this.movie.id).subscribe(result => console.log(result));
    this.movie.hate();
  }

  retractVote() {
    var user:User = this.currentUserService.get('loggedInUser');
    this.movieService.retract(user.id, this.movie.id).subscribe(result => console.log(result));
    this.movie.retract();
  }
}
