﻿import {Component, OnInit} from '@angular/core';
import {AlertService} from './alert.service';

@Component({
  // tslint:disable-next-line
  selector: 'angular-jwt-auth-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    const alertService = this.alertService;
    if (alertService.getMessage() && !alertService.getMessage().keepAfterNavigation) {
      alertService.setMessage(null);
    }
  }

  onCloseBtn() {
    this.alertService.setMessage(null);
  }

  getAlertMessage() {
    return this.alertService.alertServiceMessage;
  }

  setAlertMessage(message: any) {
    this.alertService.alertServiceMessage = message;
  }
}
