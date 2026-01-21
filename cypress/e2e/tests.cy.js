/// <reference types="cypress" />

import { onInventoryPage } from "../page-objects/inventoryPage"
import { onLoginPage } from "../page-objects/loginPage"

beforeEach('Open test application', ()=>{
    cy.visit('/')

})

describe('Main Tests 1-5', ()=>{

    it('1. Login as standard user and check url', () => {
        onLoginPage.loginUser('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html');
    })
    it('2.Login as standard user, add to cart and validate remove button', () => {
        onLoginPage.loginUser('standard_user', 'secret_sauce')        
        cy.url().should('include', '/inventory.html');
        onInventoryPage.addItemToCart('Sauce Labs Backpack')
    })
    // This test should fail
    it('3.Login as problem user and validate image for item', () => {
        onLoginPage.loginUser('problem_user', 'secret_sauce')
        onInventoryPage.validateImageForItem('Sauce Labs Onesie','red-onesie')        
        cy.url().should('include', '/inventory.html'); 
    })

    it('4.Login as locked user and validate error', () => {
        onLoginPage.loginUser('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
       
    })
    // This test should fail
    it.only('5.Login as error user and validate error', () => {
        onLoginPage.loginUser('error_user', 'secret_sauce')
        onInventoryPage.addItemToCart('Sauce Labs Fleece Jacket')
  
    })
})
