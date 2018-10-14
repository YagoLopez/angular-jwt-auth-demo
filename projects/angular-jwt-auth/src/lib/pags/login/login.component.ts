import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../shared/components/alert.service';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'angular-jwt-auth-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  PASS_MIN_LENGTH = 6;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['username1@domain.com', [Validators.required, Validators.email]],
      password: ['password1', [Validators.required, Validators.minLength(this.PASS_MIN_LENGTH)]]
    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls as any;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.authService.login(email, password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.setMessage({type: 'error', text: error, keepAfterNavigation: false});
          this.loading = false;
          window.scrollTo(0, 0);
        });
  }
}
