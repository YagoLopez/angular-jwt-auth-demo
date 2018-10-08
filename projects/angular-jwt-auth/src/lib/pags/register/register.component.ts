// todo: selectbox for roles

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../shared/components/alert.service';
import {UserService} from '../../shared/services/user.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Role} from '../../shared/models/user';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

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
      email: ['username1@domain.com', Validators.required],
      password: ['password1', [Validators.required, Validators.minLength(6)]],
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
                this.router.navigate(['/dashboard']);
                this.alertService.success('Registration successful', false);
              });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
