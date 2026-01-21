/// <reference types="cypress" />

beforeEach('Open test application', ()=>{
    cy.visit('/')

})

describe('Test Suite 1', ()=>{
    
    it('Login as standard user', () => {
        cy.get('input[placeholder="Username"]').type('');
        cy.get('input[placeholder="Password"]').type('');


    })
})