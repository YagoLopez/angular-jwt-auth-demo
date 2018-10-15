import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Role } from '../projects/angular-jwt-auth/src/lib/shared/models/role';
import { isLocalStorageAvailable } from '../projects/angular-jwt-auth/src/lib/shared/services/auth/auth.service';
var createRegisteredUsers = function () {
    var users = [];
    var user2 = {
        id: 2,
        firstName: 'firstName2',
        lastName: 'lastName2',
        email: 'username2@domain.com',
        password: 'password2',
        role: Role.Developer
    };
    var user3 = {
        id: 3,
        firstName: 'firstName3',
        lastName: 'lastName3',
        email: 'username3@domain.com',
        password: 'password3',
        role: Role.Developer
    };
    users.push(user2);
    users.push(user3);
    localStorage.setItem('users', JSON.stringify(users));
};
if (environment.production) {
    enableProdMode();
}
else {
    if (isLocalStorageAvailable()) {
        localStorage.clear();
        createRegisteredUsers();
    }
    else {
        throw new Error('Local Storage unavailable');
    }
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map