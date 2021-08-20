/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Go to the right page and submit order', () => {
    cy.get('#order-pizza').click()
    cy.url().should('include', '/pizza')
    cy.get('#name-input').type('John Barnett');
    cy.get('.topping').click({ multiple: true })
    cy.get('select').select('small').should('have.value', 'small')
    cy.get('#order-button').click()
  })

  

 
})
