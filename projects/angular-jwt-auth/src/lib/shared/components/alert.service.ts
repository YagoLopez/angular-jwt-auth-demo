import {Injectable} from '@angular/core';

export interface AlertServiceMessage {
  type: 'error' | 'success';
  message: string;
  keepAfterNavigation: boolean;
}
export class AlertService {

  // todo: usar getter y setter
  alertServiceMessage: AlertServiceMessage;

  getMessage() {
    return this.alertServiceMessage;
  }

  setMessage(message: AlertServiceMessage) {
    this.alertServiceMessage = message;
  }
}
