import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../../models/user';
import {AlertService} from '../../components/alert.service';

export const BASE_URL = {
  apiUrl: 'http://localhost:4000'
};

/**
 * Check if localStorage is available in browser
 * Local storage is needed to hold logged in user with JWT token
 */
export const isLocalStorageAvailable = (): boolean => {
  const test = 'test';
  try {
    localStorage.setItem(test, 'test');
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private alertService: AlertService) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${BASE_URL.apiUrl}/users/authenticate`,
      {
        email: email,
        password: password
      }) // todo: probar a usar subscribe aqui
      .pipe(tap(user => {
        // login successful if there's a jwt token in the user object
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page changes
          localStorage.setItem('loggedinUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loggedinUser');
    this.alertService.setMessage(null);
  }

  isUserLoggedIn() {
  }

  getJwtToken() {
  }

  decodeJwtToken() {
  }

}
