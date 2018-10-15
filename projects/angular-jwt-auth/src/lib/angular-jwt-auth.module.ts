// todo: implementar roles

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AuthGuard} from './shared/services/auth/auth.guard';
import {AuthService} from './shared/services/auth/auth.service';
import {AlertService} from './shared/components/alert.service';
import {UserService} from './shared/services/user.service';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import {MockupBackendInterceptor} from './shared/interceptors/mockup.backend.interceptor';
import {JwtInterceptor} from './shared/services/auth/jwt.interceptor';
import {AlertComponent} from './shared/components/alert.component';
import {LoginComponent} from './pags/login/login.component';
import {RegisterComponent} from './pags/register/register.component';
import {DashboardComponent} from './pags/dashboard/dashboard.component';

const ANGULAR_JWT_AUTH_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
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
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: MockupBackendInterceptor, multi: true}
  ],
  exports: [
    RouterModule
  ]
})
export class AngularJwtAuthModule { }
