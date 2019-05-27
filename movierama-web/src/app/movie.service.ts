import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Movie } from './movie'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const movieUrl = 'http://localhost:8080/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  constructor(private http: HttpClient) { }

  submit(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(movieUrl, movie, httpOptions);
  }

  like(userId: number, movieId: number): Observable<Object> {
    return this.http.post(movieUrl + '/like?userId='+userId+'&movieId='+movieId, {});
  }

  hate(userId: number, movieId: number) {
    return this.http.post(movieUrl + '/hate?userId='+userId+'&movieId='+movieId, {});
  }

  retract(userId: number, movieId: number) {
    return this.http.post(movieUrl + '/retract?userId='+userId+'&movieId='+movieId, {});
  }

  all(userId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(movieUrl + '/all?userId='+userId, {});
  }

  allByUser(userId: number, submittedByUserId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(movieUrl + '/byUser?userId='+userId+'&submittedByUserId='+submittedByUserId, {});
  }
}
