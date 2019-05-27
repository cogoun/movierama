import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MoviesComponent } from './movies/movies.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserSubscribeFormComponent } from './user-subscribe-form/user-subscribe-form.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'newMovie', component: MovieFormComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'login', component: UserLoginFormComponent },
  { path: 'logout', component: UserLogoutComponent },
  { path: 'subscribe', component: UserSubscribeFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
