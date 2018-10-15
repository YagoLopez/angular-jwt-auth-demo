var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlertService } from './alert.service';
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
        Component({
            selector: 'angular-jwt-auth-alert',
            templateUrl: 'alert.component.html'
        }),
        __metadata("design:paramtypes", [AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map