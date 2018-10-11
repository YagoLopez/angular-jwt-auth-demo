import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {LoginComponent} from './login.component';
import {AlertComponent} from '../../shared/components/alert.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../shared/services/auth/auth.service';
import {AlertService} from '../../shared/components/alert.service';

describe('• LoginComponent', () => {

  let loginFixture: ComponentFixture<LoginComponent>;
  let loginComponent: LoginComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [AlertComponent, LoginComponent],
      providers: [AuthService, AlertService]
    });
    loginFixture = TestBed.createComponent(LoginComponent);
    loginComponent = loginFixture.componentInstance;
    loginFixture.detectChanges();
  }));

  it('should create', () => {
    expect(loginComponent).toBeTruthy();
  });

  // it('should show invalid email message', () => {
  //   const loginTemplate = loginFixture.nativeElement;
  //   const submitButton = loginTemplate.querySelector('button.btn.btn-primary');
  //   const inputEmail = loginTemplate.querySelector('input#inputEmail');
  //   inputEmail.value = 'xxxx';
  //   submitButton.click();
  //   loginComponent.onSubmit();
  //   debugger;
  //   console.log(submitButton);
  // });

});
