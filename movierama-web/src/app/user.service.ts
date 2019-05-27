import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from './user'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

const userUrl = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  enroll(user: User): Observable<User> {
    return this.http.post<User>(userUrl, user, httpOptions);
  }

  login(model: User): Observable<User> {
    return this.http.get<User>(userUrl + '/login', { 
      params: new HttpParams()
        .set('name', model.name)
        .set('password', model.password) 
      }
    );
  }
}
