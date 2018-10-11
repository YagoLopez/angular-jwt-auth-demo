import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {User} from '../models/user';

export class MockupBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get registered users from array in local storage
    const registeredUsers: User[] = JSON.parse(localStorage.getItem('users')) || [];

    // todo: simulate response delay

    // simulated request: register user
    if (request.url.endsWith('/users/register') && request.method === 'POST') {
      // get new user object from post body
      const newUser = request.body;
      // validation
      const duplicatedUser = registeredUsers.filter(user => {
        return user.email === newUser.email;
      }).length;
      // todo: create fn to check duplicated users
      if (duplicatedUser) {
        return throwError({error: {message: 'Email ' + newUser.email + ' is already taken'}});
      } else {
        // save new user
        newUser.id = registeredUsers.length + 1;
        registeredUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(registeredUsers));
        // respond 200 OK
        return of(new HttpResponse({status: 200}));
      }
    }

    // simulated request: authentication
    if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
      // find if any user matches login credentials
      const filteredUsers = registeredUsers.filter(user => {
        return user.email === request.body.email && user.password === request.body.password;
      });
      if (filteredUsers.length) {
        // if login details are valid return 200 OK with user details and fake jwt token
        const user = filteredUsers[0];
        const body = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          token: 'fake-jwt-token'
        };
        return of(new HttpResponse({status: 200, body: body}));
      } else {
        // else return 400 bad request
        return throwError({error: {message: 'Invalid email and/or password'}});
      }
    }

    // simulated request: get all users
    if (request.url.endsWith('/users') && request.method === 'GET') {
      // check for fake auth token in header and return users if valid, this security
      // is implemented server side in a real application
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        return of(new HttpResponse({status: 200, body: registeredUsers}));
      } else {
        // return 401 not authorised if token is null or invalid
        return throwError({status: 401, error: {message: 'Unauthorised'}});
      }
    }

    // simulated request: get user by id
    if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
      // check for fake auth token in header and return user if valid, this security
      // is implemented server side in a real application
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        // find user by id in users array
        const urlParts = request.url.split('/');
        const id = parseInt(urlParts[urlParts.length - 1], 10);
        const matchedUsers = registeredUsers.filter(user => { // tslint:disable-line
          return user.id === id;
        });
        const user = matchedUsers.length ? matchedUsers[0] : null;
        return of(new HttpResponse({status: 200, body: user}));
      } else {
        // return 401 not authorised if token is null or invalid
        return throwError({status: 401, error: {message: 'Unauthorised'}});
      }
    }

    // simulated request: delete user
    if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
      // check for fake auth token in header and return user if valid,
      // this security is implemented server side in a real application
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        // find user by id in users array
        const urlParts = request.url.split('/');
        const id = parseInt(urlParts[urlParts.length - 1], 10);
        for (let i = 0; i < registeredUsers.length; i++) {
          const user = registeredUsers[i];
          if (user.id === id) {
            // delete user
            registeredUsers.splice(i, 1);
            localStorage.setItem('users', JSON.stringify(registeredUsers));
            break;
          }
        }
        // respond 200 OK
        return of(new HttpResponse({status: 200}));
      } else {
        // return 401 not authorised if token is null or invalid
        return throwError({status: 401, error: {message: 'Unauthorised'}});
      }
    }

    // pass through any requests not handled above
    return next.handle(request);

  }
}

