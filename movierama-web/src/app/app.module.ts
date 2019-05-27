import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WebStorageModule } from 'ngx-store';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserSubscribeFormComponent } from './user-subscribe-form/user-subscribe-form.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    MovieFormComponent,
    UserLoginFormComponent,
    UserSubscribeFormComponent,
    UserLogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    WebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
