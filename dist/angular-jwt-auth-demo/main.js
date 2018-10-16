(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/angular-jwt-auth/src/lib/angular-jwt-auth.module.ts":
/*!**********************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/angular-jwt-auth.module.ts ***!
  \**********************************************************************/
/*! exports provided: AngularJwtAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularJwtAuthModule", function() { return AngularJwtAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth/auth.guard */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.guard.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_components_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/alert.service */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/user.service */ "./projects/angular-jwt-auth/src/lib/shared/services/user.service.ts");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ "./projects/angular-jwt-auth/src/lib/shared/interceptors/error.interceptor.ts");
/* harmony import */ var _shared_interceptors_mockup_backend_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/interceptors/mockup.backend.interceptor */ "./projects/angular-jwt-auth/src/lib/shared/interceptors/mockup.backend.interceptor.ts");
/* harmony import */ var _shared_services_auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/auth/jwt.interceptor */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/jwt.interceptor.ts");
/* harmony import */ var _shared_components_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/alert.component */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.component.ts");
/* harmony import */ var _pags_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pags/login/login.component */ "./projects/angular-jwt-auth/src/lib/pags/login/login.component.ts");
/* harmony import */ var _pags_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pags/register/register.component */ "./projects/angular-jwt-auth/src/lib/pags/register/register.component.ts");
/* harmony import */ var _pags_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pags/dashboard/dashboard.component */ "./projects/angular-jwt-auth/src/lib/pags/dashboard/dashboard.component.ts");
// todo: implementar roles
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ANGULAR_JWT_AUTH_ROUTES = [
    { path: '', component: _pags_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'login', component: _pags_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'register', component: _pags_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: 'dashboard', component: _pags_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', redirectTo: '' }
];
var AngularJwtAuthModule = /** @class */ (function () {
    function AngularJwtAuthModule() {
    }
    AngularJwtAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ANGULAR_JWT_AUTH_ROUTES),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [
                _shared_components_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _pags_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pags_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _pags_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"]
            ],
            providers: [
                _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _shared_components_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
                _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_services_auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_mockup_backend_interceptor__WEBPACK_IMPORTED_MODULE_10__["MockupBackendInterceptor"], multi: true }
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AngularJwtAuthModule);
    return AngularJwtAuthModule;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/pags/dashboard/dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/pags/dashboard/dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .ico-trash {\r\n    width: 17px;\r\n    height: 17px;\r\n    margin-top: -4px;\r\n  }\r\n  .box-shadow {\r\n    border: 1px solid lightgrey;\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n  .text-muted:hover {\r\n    cursor: pointer;\r\n    color: navy !important;\r\n  }\r\n  .no-decoration { text-decoration: none }\r\n  .text-white-50 { color: rgba(255, 255, 255, .5); }\r\n  .bg-purple { background-color: #563d7c; }\r\n  .border-bottom { border-bottom: 1px solid #e5e5e5; }\r\n  .lh-100 { line-height: 1; }\r\n  .lh-125 { line-height: 1.25; }\r\n  .padding-top { padding-top: 70px }\r\n</style>\r\n\r\n<angular-jwt-auth-alert></angular-jwt-auth-alert>\r\n\r\n<main role=\"main\" class=\"container padding-top\" style=\"max-width: 900px\">\r\n\r\n  <div class=\"d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow\">\r\n    <img class=\"mr-3\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg\" alt=\"\"\r\n         width=\"48\" height=\"48\">\r\n    <div class=\"lh-100\">\r\n      <h6 class=\"mb-0 text-white lh-100\">Dashboard</h6>\r\n      <small>User logged in: {{loggedinUser.firstName}} {{loggedinUser.lastName}}</small>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"my-3 p-3 bg-white rounded box-shadow\" *ngIf=\"users.length > 0\">\r\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">List of Registered Users</h6>\r\n    <div *ngFor=\"let user of users\" class=\"media text-muted pt-3\">\r\n      <img class=\"mr-2 rounded\" style=\"width: 32px; height: 32px;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16641137fb4%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16641137fb4%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.703125%22%20y%3D%2216.9984375%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" alt=\"\">\r\n      <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\" style=\"font-size: smaller;\">\r\n        <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n          <strong class=\"text-gray-dark\">{{user.email}}</strong>\r\n          <a href=\"javascript:void(0)\" (click)=\"deleteUser(user.id)\" title=\"Delete User\" class=\"no-decoration\">\r\n            Delete <!--suppress HtmlUnknownTarget-->\r\n            <img src=\"assets/garbage.png\" alt=\"Delete User\" class=\"ico-trash\">\r\n          </a>\r\n        </div>\r\n        <span class=\"d-block\">{{user.firstName}} {{user.lastName}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p><a [routerLink]=\"['/login']\" class=\"btn btn-warning\">Logout</a></p>\r\n\r\n</main>"

/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/pags/dashboard/dashboard.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/pags/dashboard/dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./projects/angular-jwt-auth/src/lib/shared/services/user.service.ts");
/* harmony import */ var _shared_components_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/alert.component */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    DashboardComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.remove(id).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    DashboardComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]),
        __metadata("design:type", _shared_components_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"])
    ], DashboardComponent.prototype, "alertComponent", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./projects/angular-jwt-auth/src/lib/pags/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/pags/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/pags/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--todo: usar placeholders con animacion e iconos en input-text-->\r\n<!--todo: habilitar proyeccion de contenido mediante ng-content-->\r\n<style>\r\n  .form-container {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    background-color: #f5f5f5;\r\n  }\r\n  .form-signin {\r\n    width: 100%;\r\n    max-width: 390px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    border: 1px solid lightgrey;\r\n    /*box-shadow: 1px 1px 10px 0 lightgrey;*/\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n    background-color: #e9ecef;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    padding: 10px;\r\n    max-width: 300px;\r\n    margin: auto;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  .invalid-feedback {\r\n    margin-bottom: .5rem;\r\n  }\r\n  .mt-5 {\r\n    font-size: small;\r\n  }\r\n</style>\r\n\r\n<angular-jwt-auth-alert></angular-jwt-auth-alert>\r\n\r\n<div class=\"form-container\">\r\n  <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <img class=\"mb-4\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\"\r\n         alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n\r\n    <div><label for=\"inputEmail\" class=\"sr-only\">Email address</label></div>\r\n    <input type=\"text\" id=\"inputEmail\" formControlName=\"email\"\r\n           class=\"form-control\" placeholder=\"Email address\" autofocus\r\n           [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n      <div *ngIf=\"f.email.errors.email\">Email is invalid</div>\r\n    </div>\r\n\r\n    <div><label for=\"inputPassword\" class=\"sr-only\">Password</label></div>\r\n    <input type=\"password\" id=\"inputPassword\" formControlName=\"password\"\r\n           class=\"form-control\" placeholder=\"Password\"\r\n           [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n      <div *ngIf=\"f.password.errors.minLength\">Password minimum length is {{PASS_MIN_LENGTH}}</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary btn-margin\">Sign in</button>\r\n      <img *ngIf=\"loading\" alt=\"loading\"\r\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>&nbsp;\r\n      <a [routerLink]=\"['/register']\" class=\"btn btn-success btn-margin\">Register</a>\r\n    </div>\r\n\r\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2018-2019</p>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/pags/login/login.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/pags/login/login.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/alert.service */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.PASS_MIN_LENGTH = 6;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['username1@domain.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['password1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.PASS_MIN_LENGTH)]]
        });
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/dashboard'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        var email = this.loginForm.controls.email.value;
        var password = this.loginForm.controls.password.value;
        this.authService.login(email, password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.setMessage({ type: 'error', text: error, keepAfterNavigation: false });
            _this.loading = false;
            window.scrollTo(0, 0);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angular-jwt-auth-login',
            template: __webpack_require__(/*! ./login.component.html */ "./projects/angular-jwt-auth/src/lib/pags/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_components_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/pags/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/pags/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .card {\r\n    margin-bottom: 10px;\r\n    background-color: #e9ecef;\r\n  }\r\n</style>\r\n\r\n<angular-jwt-auth-alert></angular-jwt-auth-alert>\r\n\r\n<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 offset-sm-3\">\r\n        <h2>Register</h2>\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\">First Name</label>\r\n            <input id=\"firstName\" type=\"text\" formControlName=\"firstName\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"/>\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\">Last Name</label>\r\n            <input id=\"lastName\" type=\"text\" formControlName=\"lastName\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"/>\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"text\" formControlName=\"email\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"/>\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n              <div *ngIf=\"f.email.errors.email\">Email is invalid</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/>\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n              <div *ngIf=\"f.password.errors.minlength\">\r\n                Password must be at least {{PASS_MIN_LENGTH}} characters\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Role</h5>\r\n              <div class=\"card-text\">\r\n                <div class=\"form-check form-group\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"Administrator\"\r\n                         value=\"Administrator\" formControlName=\"role\" checked>\r\n                  <label class=\"form-check-label\" for=\"Administrator\">\r\n                    Administrator\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check form-group\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"Developer\"\r\n                         value=\"Developer\" formControlName=\"role\">\r\n                  <label class=\"form-check-label\" for=\"Developer\">\r\n                    Developer\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"submit\" [disabled]=\"loading\" class=\"btn btn-primary btn-margin\" value=\"Register\">\r\n            <img *ngIf=\"loading\" alt=\"loading\"\r\n                 src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-danger btn-margin\">Cancel</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/pags/register/register.component.ts":
/*!*******************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/pags/register/register.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/alert.service */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./projects/angular-jwt-auth/src/lib/shared/services/user.service.ts");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts");
/* harmony import */ var _shared_models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/role */ "./projects/angular-jwt-auth/src/lib/shared/models/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, authService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.PASS_MIN_LENGTH = 6;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['firstName1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['lastName1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['username1@domain.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['password1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.PASS_MIN_LENGTH)]],
            role: _shared_models_role__WEBPACK_IMPORTED_MODULE_6__["Role"].Administrator
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        var _a = this.registerForm.value, email = _a.email, password = _a.password;
        this.userService.register(this.registerForm.value)
            .subscribe(function () {
            _this.authService.login(email, password)
                .subscribe(function (data) {
                _this.alertService.setMessage({ type: 'success', text: 'Login successful', keepAfterNavigation: true });
                _this.router.navigate(['/dashboard']);
            });
        }, function (error) {
            _this.alertService.setMessage({ type: 'error', text: error, keepAfterNavigation: false });
            _this.loading = false;
            window.scrollTo(0, 0);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./projects/angular-jwt-auth/src/lib/pags/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _shared_components_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/components/alert.component.html":
/*!**********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/components/alert.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  .alert {\r\n    padding: .75rem 4.25rem;\r\n    margin-bottom: 0;\r\n  }\r\n  .alert-container {\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    border-radius: 0;\r\n    z-index: 1;\r\n    /*margin: 10px 15%;*/\r\n  }\r\n  .btn-close-alert {\r\n    font-weight: bold;\r\n    right: 20px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-radius: 5px;\r\n    margin-top: -3px;\r\n    border: 1px solid darkgrey;\r\n    color: darkgrey;\r\n    padding-bottom: 5px;\r\n  }\r\n  .btn-close-alert:hover {\r\n    background-color: dimgrey;\r\n    transition: 300ms;\r\n  }\r\n</style>\r\n\r\n<div *ngIf=\"getAlertMessage()\" class=\"alert-container alert\"\r\n     [ngClass]=\"{\r\n        'alert-success': getAlertMessage().type === 'success',\r\n        'alert-danger': getAlertMessage().type === 'error'\r\n        }\">\r\n  {{ getAlertMessage().text }}\r\n    <span class=\"btn-close-alert\" (click)=\"onCloseBtn()\" aria-label=\"Close\" title=\"Close\">x</span>\r\n</div>"

/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/components/alert.component.ts":
/*!********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/components/alert.component.ts ***!
  \********************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var alertService = this.alertService;
        if (alertService.getMessage() && !alertService.getMessage().keepAfterNavigation) {
            alertService.setMessage(null);
        }
    };
    AlertComponent.prototype.onCloseBtn = function () {
        this.alertService.setMessage(null);
    };
    AlertComponent.prototype.getAlertMessage = function () {
        return this.alertService.alertMessage;
    };
    AlertComponent.prototype.setAlertMessage = function (message) {
        this.alertService.alertMessage = message;
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angular-jwt-auth-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.component.html")
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts":
/*!******************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts ***!
  \******************************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.prototype.getMessage = function () {
        return this.alertMessage;
    };
    AlertService.prototype.setMessage = function (message) {
        this.alertMessage = message;
    };
    return AlertService;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/interceptors/error.interceptor.ts":
/*!************************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/interceptors/error.interceptor.ts ***!
  \************************************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService) {
        this.authService = authService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authService.logout();
                // location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/interceptors/mockup.backend.interceptor.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/interceptors/mockup.backend.interceptor.ts ***!
  \*********************************************************************************************/
/*! exports provided: MockupBackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupBackendInterceptor", function() { return MockupBackendInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var MockupBackendInterceptor = /** @class */ (function () {
    function MockupBackendInterceptor() {
    }
    MockupBackendInterceptor.prototype.intercept = function (request, next) {
        // get registered users from array in local storage
        var registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
        // todo: simulate response delay
        // simulated request: register user
        if (request.url.endsWith('/users/register') && request.method === 'POST') {
            // get new user object from post body
            var newUser_1 = request.body;
            // validation
            var duplicatedUser = registeredUsers.filter(function (user) {
                return user.email === newUser_1.email;
            }).length;
            // todo: create fn to check duplicated users
            if (duplicatedUser) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ error: { message: 'Email: ' + newUser_1.email + ' is already taken' } });
            }
            else {
                // save new user
                newUser_1.id = registeredUsers.length + 1;
                registeredUsers.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(registeredUsers));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ status: 200 }));
            }
        }
        // simulated request: authentication
        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            // find if any user matches login credentials
            var filteredUsers = registeredUsers.filter(function (user) {
                return user.email === request.body.email && user.password === request.body.password;
            });
            if (filteredUsers.length) {
                // if login details are valid return 200 OK with user details and fake jwt token
                var user = filteredUsers[0];
                var body = {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: 'fake-jwt-token'
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ status: 200, body: body }));
            }
            else {
                // else return 400 bad request
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ error: { message: 'Invalid email and/or password' } });
            }
        }
        // simulated request: get all users
        if (request.url.endsWith('/users') && request.method === 'GET') {
            // check for fake auth token in header and return users if valid, this security
            // is implemented server side in a real application
            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ status: 200, body: registeredUsers }));
            }
            else {
                // return 401 not authorised if token is null or invalid
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
            }
        }
        // simulated request: get user by id
        if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
            // check for fake auth token in header and return user if valid, this security
            // is implemented server side in a real application
            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                // find user by id in users array
                var urlParts = request.url.split('/');
                var id_1 = parseInt(urlParts[urlParts.length - 1], 10);
                var matchedUsers = registeredUsers.filter(function (user) {
                    return user.id === id_1;
                });
                var user = matchedUsers.length ? matchedUsers[0] : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ status: 200, body: user }));
            }
            else {
                // return 401 not authorised if token is null or invalid
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
            }
        }
        // simulated request: delete user
        if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
            // check for fake auth token in header and return user if valid,
            // this security is implemented server side in a real application
            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                // find user by id in users array
                var urlParts = request.url.split('/');
                var id = parseInt(urlParts[urlParts.length - 1], 10);
                for (var i = 0; i < registeredUsers.length; i++) {
                    var user = registeredUsers[i];
                    if (user.id === id) {
                        // delete user
                        registeredUsers.splice(i, 1);
                        localStorage.setItem('users', JSON.stringify(registeredUsers));
                        break;
                    }
                }
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ status: 200 }));
            }
            else {
                // return 401 not authorised if token is null or invalid
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
            }
        }
        // pass through any requests not handled above
        return next.handle(request);
    };
    return MockupBackendInterceptor;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/models/role.ts":
/*!*****************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/models/role.ts ***!
  \*****************************************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["Administrator"] = "Administrator";
    Role["Developer"] = "Developer";
})(Role || (Role = {}));


/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.guard.ts":
/*!******************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.guard.ts ***!
  \******************************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('loggedinUser')) {
            // logged in so return true
            return true;
        }
        else {
            // user not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            console.log('User not logged in. Redirecting to login page');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts":
/*!********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts ***!
  \********************************************************************************/
/*! exports provided: BASE_URL, isLocalStorageAvailable, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalStorageAvailable", function() { return isLocalStorageAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert.service */ "./projects/angular-jwt-auth/src/lib/shared/components/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = {
    apiUrl: 'http://localhost:4000'
};
/**
 * Check if localStorage is available in browser
 * Local storage is needed to hold logged in user with JWT token
 */
var isLocalStorageAvailable = function () {
    var test = 'test';
    try {
        localStorage.setItem(test, 'test');
        localStorage.removeItem(test);
        return true;
    }
    catch (e) {
        return false;
    }
};
var AuthService = /** @class */ (function () {
    function AuthService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(BASE_URL.apiUrl + "/users/authenticate", {
            email: email,
            password: password
        }) // todo: probar a usar subscribe aqui
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) {
            // login successful if there's a jwt token in the user object
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page changes
                localStorage.setItem('loggedinUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('loggedinUser');
        this.alertService.setMessage(null);
    };
    AuthService.prototype.isUserLoggedIn = function () {
    };
    AuthService.prototype.getJwtToken = function () {
    };
    AuthService.prototype.decodeJwtToken = function () {
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _components_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/services/auth/jwt.interceptor.ts":
/*!***********************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/services/auth/jwt.interceptor.ts ***!
  \***********************************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
// todo: use real jwt
// todo: implement http logger: https://angular.io/guide/http#logging
/**
 * HttpInterceptor that adds authorization header with JWT for each request of a logged in user
 */
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // get logged in user
        var loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
        if (loggedinUser && loggedinUser.token) {
            // add JWT header
            request = request.clone({
                setHeaders: { Authorization: "Bearer " + loggedinUser.token }
            });
        }
        return next.handle(request);
    };
    return JwtInterceptor;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/shared/services/user.service.ts":
/*!***************************************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/shared/services/user.service.ts ***!
  \***************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../urls */ "./projects/angular-jwt-auth/src/lib/urls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(_urls__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/register", user);
    };
    UserService.prototype.getAll = function () {
        return this.http.get(_urls__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_urls__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + id);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_urls__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + user.id, user);
    };
    UserService.prototype.remove = function (id) {
        return this.http.delete(_urls__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./projects/angular-jwt-auth/src/lib/urls.ts":
/*!***************************************************!*\
  !*** ./projects/angular-jwt-auth/src/lib/urls.ts ***!
  \***************************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:4000';


/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-jwt-auth-demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_angular_jwt_auth_src_lib_angular_jwt_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/angular-jwt-auth/src/lib/angular-jwt-auth.module */ "./projects/angular-jwt-auth/src/lib/angular-jwt-auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_angular_jwt_auth_src_lib_pags_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/angular-jwt-auth/src/lib/pags/login/login.component */ "./projects/angular-jwt-auth/src/lib/pags/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{ path: '', component: _projects_angular_jwt_auth_src_lib_pags_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }], { useHash: true }),
                _projects_angular_jwt_auth_src_lib_angular_jwt_auth_module__WEBPACK_IMPORTED_MODULE_3__["AngularJwtAuthModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _projects_angular_jwt_auth_src_lib_shared_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/angular-jwt-auth/src/lib/shared/models/role */ "./projects/angular-jwt-auth/src/lib/shared/models/role.ts");
/* harmony import */ var _projects_angular_jwt_auth_src_lib_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service */ "./projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service.ts");






var createRegisteredUsers = function () {
    var users = [];
    var user2 = {
        id: 2,
        firstName: 'firstName2',
        lastName: 'lastName2',
        email: 'username2@domain.com',
        password: 'password2',
        role: _projects_angular_jwt_auth_src_lib_shared_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Developer
    };
    var user3 = {
        id: 3,
        firstName: 'firstName3',
        lastName: 'lastName3',
        email: 'username3@domain.com',
        password: 'password3',
        role: _projects_angular_jwt_auth_src_lib_shared_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Developer
    };
    users.push(user2);
    users.push(user3);
    localStorage.setItem('users', JSON.stringify(users));
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    if (Object(_projects_angular_jwt_auth_src_lib_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["isLocalStorageAvailable"])()) {
        localStorage.clear();
        createRegisteredUsers();
    }
    else {
        throw new Error('Local Storage unavailable');
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yagol\Documents\projects\angular-jwt-auth-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map