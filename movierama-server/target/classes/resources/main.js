(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-form/movie-form.component */ "./src/app/movie-form/movie-form.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login-form/user-login-form.component */ "./src/app/user-login-form/user-login-form.component.ts");
/* harmony import */ var _user_subscribe_form_user_subscribe_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-subscribe-form/user-subscribe-form.component */ "./src/app/user-subscribe-form/user-subscribe-form.component.ts");







var routes = [
    { path: '', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"] },
    { path: 'newMovie', component: _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_3__["MovieFormComponent"] },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"] },
    { path: 'login', component: _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginFormComponent"] },
    { path: 'subscribe', component: _user_subscribe_form_user_subscribe_form_component__WEBPACK_IMPORTED_MODULE_6__["UserSubscribeFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 { \n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%\n}\n\napp-movie {\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1MCVcbn1cblxuYXBwLW1vdmllIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <h1>{{title}}</h1>\n  <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n  <a class=\"nav-link\" routerLink=\"/subscribe\">Sign Up</a>\n  <a class=\"nav-link\" routerLink=\"/newMovie\">New Movie</a>\n  <span>Welcome back: <a class=\"nav-link\" routerLink=\"/movies\">Guest</a></span>\n</nav>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MovieRama';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-form/movie-form.component */ "./src/app/movie-form/movie-form.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-login-form/user-login-form.component */ "./src/app/user-login-form/user-login-form.component.ts");
/* harmony import */ var _user_subscribe_form_user_subscribe_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-subscribe-form/user-subscribe-form.component */ "./src/app/user-subscribe-form/user-subscribe-form.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_5__["MovieComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__["MoviesComponent"],
                _movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_7__["MovieFormComponent"],
                _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_9__["UserLoginFormComponent"],
                _user_subscribe_form_user_subscribe_form_component__WEBPACK_IMPORTED_MODULE_10__["UserSubscribeFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock-movies.ts":
/*!********************************!*\
  !*** ./src/app/mock-movies.ts ***!
  \********************************/
/*! exports provided: MOVIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES", function() { return MOVIES; });
var MOVIES = [
    {
        title: 'Star Wars',
        datePosted: Date.now(),
        description: 'lorem ipsum',
        hates: 10,
        likes: 2,
        postedBy: 'Kostas'
    },
    {
        title: 'Avengers',
        datePosted: Date.now(),
        description: 'lorem ipsum',
        hates: 1,
        likes: 2,
        postedBy: 'Kostas'
    },
    {
        title: 'Blade Runner',
        datePosted: Date.now(),
        description: 'lorem ipsum',
        hates: 100,
        likes: 2,
        postedBy: 'Kostas'
    }
];


/***/ }),

/***/ "./src/app/movie-form/movie-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/movie-form/movie-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWZvcm0vbW92aWUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/movie-form/movie-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-form/movie-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>New Movie</h1>\n    <form (ngSubmit)=\"onSubmit()\" #movieForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"model.title\" name=\"title\">\n      </div>\n \n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"model.description\" name=\"description\">\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n \n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-form/movie-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-form/movie-form.component.ts ***!
  \****************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");




var MovieFormComponent = /** @class */ (function () {
    function MovieFormComponent(router) {
        this.router = router;
        this.model = new _movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]('Title', Date.now(), '', 0, 0, 'Guest');
        this.submitted = false;
    }
    MovieFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.router.navigate(['/movies']);
    };
    MovieFormComponent.prototype.ngOnInit = function () {
    };
    MovieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-form',
            template: __webpack_require__(/*! ./movie-form.component.html */ "./src/app/movie-form/movie-form.component.html"),
            styles: [__webpack_require__(/*! ./movie-form.component.css */ "./src/app/movie-form/movie-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MovieFormComponent);
    return MovieFormComponent;
}());



/***/ }),

/***/ "./src/app/movie.ts":
/*!**************************!*\
  !*** ./src/app/movie.ts ***!
  \**************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(title, datePosted, description, likes, hates, postedBy) {
        this.title = title;
        this.datePosted = datePosted;
        this.description = description;
        this.likes = likes;
        this.hates = hates;
        this.postedBy = postedBy;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{movie.title}}</h2>\n  <div class=\"form-group\">Posted by: <a routerLink=\"/movies\">{{movie.postedBy}}</a></div>\n  <div class=\"form-group\">{{movie.description}}</div>\n  <div class=\"form-group\">likes: <a routerLink=\"/movies\">{{movie.likes}}</a> | hates: <a routerLink=\"/movies\">{{movie.hates}}</a></div>\n</div>"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");



var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieComponent.prototype, "movie", void 0);
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movies {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n.movies li {\n    position: relative\n    left 0;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0Y7SUFDSTtVQUNNO0lBQ04sZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1ZW07XG4gIH1cbi5tb3ZpZXMgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIGxlZnQgMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"movies\">\n    <li *ngFor=\"let movie of movies\">\n        <app-movie [movie]=\"movie\"></app-movie>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-movies */ "./src/app/mock-movies.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent() {
        this.movies = _mock_movies__WEBPACK_IMPORTED_MODULE_2__["MOVIES"];
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/user-login-form/user-login-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-login-form/user-login-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4tZm9ybS91c2VyLWxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-login-form/user-login-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-login-form/user-login-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>User Login</h1>\n    <form (ngSubmit)=\"onSubmit()\" #userLoginForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\n      </div>\n \n      <div class=\"form-group\">\n        <label for=\"description\">Password</label>\n        <input type=\"text\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"model.password\" name=\"password\">\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n \n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user-login-form/user-login-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-login-form/user-login-form.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginFormComponent", function() { return UserLoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");




var UserLoginFormComponent = /** @class */ (function () {
    function UserLoginFormComponent(router) {
        this.router = router;
        this.model = new _user__WEBPACK_IMPORTED_MODULE_3__["User"](0, '', '');
    }
    UserLoginFormComponent.prototype.onSubmit = function () {
        this.router.navigate(['/movies']);
    };
    UserLoginFormComponent.prototype.ngOnInit = function () {
    };
    UserLoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-login-form',
            template: __webpack_require__(/*! ./user-login-form.component.html */ "./src/app/user-login-form/user-login-form.component.html"),
            styles: [__webpack_require__(/*! ./user-login-form.component.css */ "./src/app/user-login-form/user-login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserLoginFormComponent);
    return UserLoginFormComponent;
}());



/***/ }),

/***/ "./src/app/user-subscribe-form/user-subscribe-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/user-subscribe-form/user-subscribe-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc3Vic2NyaWJlLWZvcm0vdXNlci1zdWJzY3JpYmUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-subscribe-form/user-subscribe-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-subscribe-form/user-subscribe-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Subscribe</h1>\n    <form (ngSubmit)=\"onSubmit()\" #userSubscribeForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\n      </div>\n \n      <div class=\"form-group\">\n        <label for=\"description\">Password</label>\n        <input type=\"text\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"model.password\" name=\"password\">\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n \n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user-subscribe-form/user-subscribe-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-subscribe-form/user-subscribe-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserSubscribeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubscribeFormComponent", function() { return UserSubscribeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");




var UserSubscribeFormComponent = /** @class */ (function () {
    function UserSubscribeFormComponent(router) {
        this.router = router;
        this.model = new _user__WEBPACK_IMPORTED_MODULE_3__["User"](0, '', '');
    }
    UserSubscribeFormComponent.prototype.onSubmit = function () {
        // save the model
        this.router.navigate(['/login']);
    };
    UserSubscribeFormComponent.prototype.ngOnInit = function () {
    };
    UserSubscribeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-subscribe-form',
            template: __webpack_require__(/*! ./user-subscribe-form.component.html */ "./src/app/user-subscribe-form/user-subscribe-form.component.html"),
            styles: [__webpack_require__(/*! ./user-subscribe-form.component.css */ "./src/app/user-subscribe-form/user-subscribe-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserSubscribeFormComponent);
    return UserSubscribeFormComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\personal\movierama\movierama-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map