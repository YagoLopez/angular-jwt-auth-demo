import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Role } from '../projects/angular-jwt-auth/src/lib/shared/models/user';

const createRegisteredUsers = () => {
  const users = [];
  const user2 = {
    id: 2,
    firstName: 'firstName2',
    lastName: 'lastName2',
    email: 'username2@domain.com',
    password: 'password2',
    role: Role.Developer
  };
  const user3 = {
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
} else {
  localStorage.clear();
  createRegisteredUsers();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
