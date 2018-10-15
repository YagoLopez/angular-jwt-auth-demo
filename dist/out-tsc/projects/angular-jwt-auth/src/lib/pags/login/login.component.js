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
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../shared/components/alert.service';
import { AuthService } from '../../shared/services/auth/auth.service';
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
            email: ['username1@domain.com', [Validators.required, Validators.email]],
            password: ['password1', [Validators.required, Validators.minLength(this.PASS_MIN_LENGTH)]]
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
        Component({
            selector: 'angular-jwt-auth-login',
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            AuthService,
            AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map