/// <reference types="cypress" />

import { onInventoryPage } from "../page-objects/inventoryPage"
import { onLoginPage } from "../page-objects/loginPage"

beforeEach('Open test application', ()=>{
    cy.visit('/')

})

describe('Main Tests 1-3', ()=>{

    it('Login as standard user and check url', () => {
        onLoginPage.loginUser('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html');
    })
    it('Login as standard user, add to cart and validate remove button', () => {
        onLoginPage.loginUser('standard_user', 'secret_sauce')        
        cy.url().should('include', '/inventory.html');
    
        onInventoryPage.addItemToCart('Sauce Labs Backpack')
    })
    it('Login as problem user and validate remove image', () => {
        onLoginPage.loginUser('problem_user', 'secret_sauce')
        onInventoryPage.validateImageForItem('Sauce Labs Onesie','red-onesie')        
        cy.url().should('include', '/inventory.html');

    
    })
})
