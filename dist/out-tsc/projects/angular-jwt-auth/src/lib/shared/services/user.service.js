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
import { API_URL } from '../../urls';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(API_URL + "/users/register", user);
    };
    UserService.prototype.getAll = function () {
        return this.http.get(API_URL + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(API_URL + "/users/" + id);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(API_URL + "/users/" + user.id, user);
    };
    UserService.prototype.remove = function (id) {
        return this.http.delete(API_URL + "/users/" + id);
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map