/// <reference types="Cypress" />

describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/login');
    cy.get('input#inputEmail').clear();
    cy.get('input#inputPassword').clear();
  });

  describe('Unregistered user', () => {
    it('Should show validation error with empty email', () => {
      cy.get('input#inputPassword').type('password');
      cy.get('button.btn').click();
      cy.get('input#inputEmail').should('have.class', 'is-invalid');
    });

    it('Should show validation error with invalid email', () => {
      cy.get('input#inputEmail').type('xxxx');
      cy.get('input#inputPassword').type('password');
      cy.get('button.btn').click();
      cy.get('input#inputEmail').should('have.class', 'is-invalid');
    });

    it('Should show validation error with empty password', () => {
      cy.get('input#inputEmail').type('user@domain.com');
      cy.get('button.btn').click();
      cy.get('input#inputPassword').should('have.class', 'is-invalid');
    });

    it('Should show validation error with too short password', () => {
      cy.get('input#inputEmail').type('user@domain.com');
      cy.get('input#inputPassword').type('xxxx');
      cy.get('button.btn').click();
      cy.get('input#inputPassword').should('have.class', 'is-invalid');
    });

    it('Should show validation errors with empty email and password', () => {
      cy.get('button.btn').click();
      cy.get('input#inputEmail').should('have.class', 'ng-invalid');
      cy.get('input#inputEmail').should('have.class', 'is-invalid');
      cy.get('input#inputPassword').should('have.class', 'ng-invalid');
    });

    it('Should show alert error with valid email and password but user not registered previously', () => {
      cy.get('input#inputEmail').type('xxxxx@xxxx.com');
      cy.get('input#inputPassword').type('xxxxxx');
      cy.get('button.btn').click();
      cy.get('.alert-container').should('be.visible');
    });
  });

  describe('Registered user', () => {
    it('Should log in a user previously registered', () => {
      cy.get('input#inputEmail').type('username2@domain.com');
      cy.get('input#inputPassword').type('password2');
      cy.get('button.btn').click();
      cy.location().should((location) => {
        expect(location.href).to.contain('dashboard');
      })
    });
  });

});

