[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

# angular-jwt-auth

Angular library with the following features:

- **Authentication** (User Registration and Login)
- **Authorization** (Restricted zones)
- **Security based in JSON Web Tokens (JWT)** (still not implemented)
- **Mocked Backend**

Based on the work of Jason Watmore: http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial

## Demo

- [Link](https://yagolopez.js.org/angular-jwt-auth-demo/dist/angular-jwt-auth-demo/)

## Requirements

- Node Package Manager (NPM)
- Angular CLI

## Installation

- Download or clone the repository

## Execution

There are available several scripts to run in the commnad line:

- Run Application: `npm start`
- Test Application: `npm test-app`
- Test Library: `npm test-lib`
- Build Application: `npm build-app`
- Build Library: `npm build-lib`
- Build Application: `npm build-app`
- Build Library: `npm build-lib`
- Run End to End tests: `npm e2e` 
  - [View login.spec.js](https://yagolopez.js.org/angular-jwt-auth-demo/cypress/videos/login.spec.js.mp4)
  - [View register.spec.js](https://yagolopez.js.org/angular-jwt-auth-demo/cypress/videos/register.spec.js.mp4)
- Code Coverage: `npm coverage`
  - [View coverage](https://yagolopez.js.org/angular-jwt-auth-demo/coverage)
- List All Available Scripts: `npm run`

## Usage

Use the components included in the library in your Angular app. 

- The source code for the components is placed in the `/projects/angular-jwt-auth/src/lib` directory
- The source code for the demo app is in the `/src` directory

The components provided are the following:

- **Register Component**
  - Component for registering users
  - Define a route and point your router to this component to use it. For example: `{route: '/register', component: RegisterComponent}`
- **Login Component**
  - Component to log in users 
  - `<angular-jwt-auth-login><angular-jwt-auth-login/>`
- **Alert Component**
  - Component to show alert messages to users
  - `<angular-jwt-auth-alert><angular-jwt-auth-alert/>`
- **Dashboard Component**
  - Demo component
  - Define a route and point your router to this component to use it. For example: `{route: '/dashboard', component: DashboardComponent}`

