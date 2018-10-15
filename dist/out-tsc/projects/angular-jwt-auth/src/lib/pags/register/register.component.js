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
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../shared/components/alert.service';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Role } from '../../shared/models/role';
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
            firstName: ['firstName1', Validators.required],
            lastName: ['lastName1', Validators.required],
            email: ['username1@domain.com', [Validators.required, Validators.email]],
            password: ['password1', [Validators.required, Validators.minLength(this.PASS_MIN_LENGTH)]],
            role: Role.Administrator
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
        Component({
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router,
            UserService,
            AuthService,
            AlertService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map