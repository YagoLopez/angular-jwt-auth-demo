var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { AuthService } from './shared/services/auth/auth.service';
import { AlertService } from './shared/components/alert.service';
import { UserService } from './shared/services/user.service';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { MockupBackendInterceptor } from './shared/interceptors/mockup.backend.interceptor';
import { JwtInterceptor } from './shared/services/auth/jwt.interceptor';
import { AlertComponent } from './shared/components/alert.component';
import { LoginComponent } from './pags/login/login.component';
import { RegisterComponent } from './pags/register/register.component';
import { DashboardComponent } from './pags/dashboard/dashboard.component';
var ANGULAR_JWT_AUTH_ROUTES = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];
var AngularJwtAuthModule = /** @class */ (function () {
    function AngularJwtAuthModule() {
    }
    AngularJwtAuthModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(ANGULAR_JWT_AUTH_ROUTES),
                HttpClientModule,
                ReactiveFormsModule,
            ],
            declarations: [
                AlertComponent,
                LoginComponent,
                RegisterComponent,
                DashboardComponent
            ],
            providers: [
                AuthGuard,
                AlertService,
                AuthService,
                UserService,
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: MockupBackendInterceptor, multi: true }
            ],
            exports: [
                RouterModule
            ]
        })
    ], AngularJwtAuthModule);
    return AngularJwtAuthModule;
}());
export { AngularJwtAuthModule };
//# sourceMappingURL=angular-jwt-auth.module.js.map