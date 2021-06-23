/// <reference types="cypress"/>

describe('google search', () => {

  it('show correct results when searching for "cypress"', () =>{
    cy.visit('https://www.google.com/')
    cy.get('input[title=Pesquisar]').type('cypress')
    cy.contains('input[type=submit]', 'Pesquisa Google').click()

    cy.get('h3')
      .should('be.visible')
      .and('contain.text', 'JavaScript End to End Testing Framework | cypress.io')
  });

});
