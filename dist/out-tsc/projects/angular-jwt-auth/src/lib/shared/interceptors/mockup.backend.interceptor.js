import { HttpResponse, } from '@angular/common/http';
import { of, throwError } from 'rxjs';
var MockupBackendInterceptor = /** @class */ (function () {
    function MockupBackendInterceptor() {
    }
    MockupBackendInterceptor.prototype.intercept = function (request, next) {
        // get registered users from array in local storage
        var registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
        // todo: simulate response delay
        // simulated request: register user
        if (request.url.endsWith('/users/register') && request.method === 'POST') {
            // get new user object from post body
            var newUser_1 = request.body;
            // validation
            var duplicatedUser = registeredUsers.filter(function (user) {
                return user.email === newUser_1.email;
            }).length;
            // todo: create fn to check duplicated users
            if (duplicatedUser) {
                return throwError({ error: { message: 'Email: ' + newUser_1.email + ' is already taken' } });
            }
            else {
                // save new user
                newUser_1.id = registeredUsers.length + 1;
                registeredUsers.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(registeredUsers));
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }
        }
        // simulated request: authentication
        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            // find if any user matches login credentials
            var filteredUsers = registeredUsers.filter(function (user) {
                return user.email === request.body.email && user.password === request.body.password;
            });
            if (filteredUsers.length) {
                // if login details are valid return 200 OK with user details and fake jwt token
                var user = filteredUsers[0];
                var body = {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: 'fake-jwt-token'
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }
            else {
                // else return 400 bad request
                return throwError({ error: { message: 'Invalid email and/or password' } });
            }
        }
        // simulated request: get all users
        if (request.url.endsWith('/users') && request.method === 'GET') {
            // check for fake auth token in header and return users if valid, this security
            // is implemented server side in a real application
            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                return of(new HttpResponse({ status: 200, body: registeredUsers }));
            }
            else {
                // return 401 not authorised if token is null or invalid
                return throwError({ status: 401, error: { message: 'Unauthorised' } });
            }
        }
        // simulated request: get user by id
        if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
            // check for fake auth token in header and return user if valid, this security
            // is implemented server side in a real application
            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                // find user by id in users array
                var urlParts = request.url.split('/');
                var id_1 = parseInt(urlParts[urlParts.length - 1], 10);
                var matchedUsers = registeredUsers.filter(function (user) {
                    return user.id === id_1;
                });
                var user = matchedUsers.length ? matchedUsers[0] : null;
                return of(new HttpResponse({ status: 200, body: user }));
            }
            else {
                // return 401 not authorised if token is null or invalid
                return throwError({ status: 401, error: { message: 'Unauthorised' } });
            }
        }
        // simulated request: delete user
        if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
            // check for fake auth token in header and return user if valid,
            // this security is implemented server side in a real application
            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                // find user by id in users array
                var urlParts = request.url.split('/');
                var id = parseInt(urlParts[urlParts.length - 1], 10);
                for (var i = 0; i < registeredUsers.length; i++) {
                    var user = registeredUsers[i];
                    if (user.id === id) {
                        // delete user
                        registeredUsers.splice(i, 1);
                        localStorage.setItem('users', JSON.stringify(registeredUsers));
                        break;
                    }
                }
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }
            else {
                // return 401 not authorised if token is null or invalid
                return throwError({ status: 401, error: { message: 'Unauthorised' } });
            }
        }
        // pass through any requests not handled above
        return next.handle(request);
    };
    return MockupBackendInterceptor;
}());
export { MockupBackendInterceptor };
//# sourceMappingURL=mockup.backend.interceptor.js.map