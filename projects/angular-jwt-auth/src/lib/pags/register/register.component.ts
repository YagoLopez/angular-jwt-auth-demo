// todo: selectbox for roles

import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../shared/components/alert.service';
import {UserService} from '../../shared/services/user.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Role} from '../../shared/models/user';
import {AlertComponent} from '../../shared/components/alert.component';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  PASS_MIN_LENGTH = 6;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['firstName1', Validators.required],
      lastName: ['lastName1', Validators.required],
      email: ['username1@domain.com', [Validators.required, Validators.email]],
      password: ['password1', [Validators.required, Validators.minLength(this.PASS_MIN_LENGTH)]],
      role: Role.Administrator
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls as any;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const {email, password} = this.registerForm.value;
    this.userService.register(this.registerForm.value)
      .subscribe(
        () => {
          this.authService.login(email, password)
            .subscribe(
              data => {
                this.alertService.setMessage({type: 'success', message: 'Login successful', keepAfterNavigation: true});
                this.router.navigate(['/dashboard']);
              });
        },
        error => {
          this.alertService.setMessage({type: 'error', message: error, keepAfterNavigation: false});
          this.loading = false;
          window.scrollTo(0, 0);
        });
  }
}
