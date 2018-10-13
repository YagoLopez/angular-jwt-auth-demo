import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService, AlertServiceMessage} from './alert.service';

@Component({
  // tslint:disable-next-line
  selector: 'angular-jwt-auth-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
  // private subscription: Subscription;
  // message: AlertServiceMessage;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    // this.subscription = this.alertService.getMessage().subscribe(message => {
    //   this.message = message;
    //   console.log('message', message);
    // });
    // this.message = this.alertService.alertServiceMessage2;
    // console.log('alert component on init, message:', this.message);
debugger
    const alertService = this.alertService;
    if (alertService.getMessage() && alertService.getMessage().type === 'error') {
      alertService.setMessage(null);
    }
    console.log('alert component on init. alert message: ', this.alertService.alertServiceMessage);
  }

  onCloseBtn() {
    // this.message = null;
  }


  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  getAlertMessage() {
    return this.alertService.alertServiceMessage;
  }

  setAlertMessage(message: any) {
    this.alertService.alertServiceMessage = message;
  }
}
