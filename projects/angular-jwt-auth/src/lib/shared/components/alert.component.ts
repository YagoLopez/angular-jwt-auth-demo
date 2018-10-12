// todo: cambiar selector de componente
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from './alert.service';

@Component({
  // tslint:disable-next-line
  selector: 'angular-jwt-auth-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  onCloseBtn() {
    this.message = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
