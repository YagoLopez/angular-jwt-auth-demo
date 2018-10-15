var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AlertService } from '../../components/alert.service';
export var BASE_URL = {
    apiUrl: 'http://localhost:4000'
};
/**
 * Check if localStorage is available in browser
 * Local storage is needed to hold logged in user with JWT token
 */
export var isLocalStorageAvailable = function () {
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
            .pipe(tap(function (user) {
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
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, AlertService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map