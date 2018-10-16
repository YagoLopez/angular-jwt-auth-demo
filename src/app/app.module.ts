// todo: borrar localStorage al terminar la app
// todo: revisar el borrado de usuarios en "/dashboard"

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AngularJwtAuthModule} from '../../projects/angular-jwt-auth/src/lib/angular-jwt-auth.module';
import {AppComponent} from './app.component';
import {LoginComponent} from '../../projects/angular-jwt-auth/src/lib/pags/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component: LoginComponent}], {useHash: true}),
    AngularJwtAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
