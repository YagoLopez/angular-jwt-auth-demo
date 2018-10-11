import { browser, by, element } from 'protractor';

export class LoginPage {
  static navigateTo() {
    return browser.get('/login');
  }

  static getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
