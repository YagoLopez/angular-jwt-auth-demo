/// <reference types="Cypress" />

describe('Registration Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/register');
  });

  it('Should register user and redirect to dashboard route', () => {
    cy.get('.btn-primary').click();
    cy.location().should((location) => {
      expect(location.href).to.contain('dashboard');
    })
  });

  it('Should cancel registration and return to login page', () => {
    cy.get('.btn-danger').click();
    cy.location().should((location) => {
      expect(location.href).to.contain('login');
    })
  });

  it('Should give error message with duplicated user registration data', () => {
    cy.get('#firstName').clear();
    cy.get('#lastName').clear();
    cy.get('#email').clear();
    cy.get('#password').clear();

    cy.get('#firstName').type('firstName2');
    cy.get('#lastName').type('lastName2');
    cy.get('#email').type('username2@domain.com');
    cy.get('#password').type('password2');

    cy.get('.btn-primary').click();
    cy.get('.alert-container').should('be.visible');
  });

  it('Should give error message with empty email', () => {
    cy.get('#email').clear();
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback > div').should('be.visible');
  });

  it('Should give error message with invalid email string', () => {
    cy.get('#email').clear();
    cy.get('#email').type('xxxxxx');
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback > div').should('be.visible');
  });

  it('Should give error message with empty password', () => {
    cy.get('#password').clear();
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback > div').should('be.visible');
  });

  it('Should give error message with too short password', () => {
    cy.get('#password').clear();
    cy.get('#password').type('xxx');
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback > div').should('be.visible');
  });

  it('Should give error message with empty first name', () => {
    cy.get('#firstName').clear();
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback > div').should('be.visible');
  });

  it('Should give error message with empty last name', () => {
    cy.get('#lastName').clear();
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback > div').should('be.visible');
  });

});