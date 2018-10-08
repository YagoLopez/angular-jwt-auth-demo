// todo: use a real jwt
// todo: implement http logger: https://angular.io/guide/http#logging

import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * HttpInterceptor that adds authorization header with JWT for each request of a logged in user
 */
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get logged in user
    const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));
    if (loggedinUser && loggedinUser.token) {
      // add JWT header
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${loggedinUser.token}`}
      });
    }
    return next.handle(request);
  }
}
