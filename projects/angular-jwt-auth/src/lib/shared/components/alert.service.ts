
export interface AlertMessage {
  type: 'error' | 'success';
  text: string;
  keepAfterNavigation: boolean;
}
export class AlertService {

  alertMessage: AlertMessage;

  getMessage() {
    return this.alertMessage;
  }

  setMessage(message: AlertMessage) {
    this.alertMessage = message;
  }
}
