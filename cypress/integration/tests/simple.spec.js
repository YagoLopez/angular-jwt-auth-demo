/// <reference types="Cypress" />

describe('Login Page', () => {

  before(() => {
    cy.visit('http://localhost:4200/login');
  });

  describe('User not registered', () => {
    it('should show validation errors with invalid email and password', () => {
      cy.get('input#inputEmail').clear();
      cy.get('input#inputPassword').clear();
      cy.get('button.btn').click();

      cy.get('input#inputEmail').should('have.class', 'ng-invalid');
      cy.get('input#inputEmail').should('have.class', 'is-invalid');
      cy.get('input#inputPassword').should('have.class', 'ng-invalid');
    });

    it('Should show alert error with valid email and password', () => {
      cy.get('input#inputEmail').type('user1@domain1.com');
      cy.get('input#inputPassword').type('password1');
      cy.get('button.btn').click();
      cy.get('.alert-container').should('be.visible');
    });


  });


});

