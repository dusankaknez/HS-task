/// <reference types="cypress" />

import { onInventoryPage } from "../page-objects/inventoryPage"
import { onLoginPage } from "../page-objects/loginPage"

beforeEach('Open test application', ()=>{
    cy.visit('/')

})

describe('Main Tests 1-5', ()=>{
       const standardUser = Cypress.env('users').standard;
    it('1. Login as standard user and check url', () => {
        onLoginPage.loginUser(standardUser.username, standardUser.password)
        cy.url().should('include', '/inventory.html');
    })
    it('2.Login as standard user, add to cart and validate remove button', () => {
        onLoginPage.loginUser(standardUser.username, standardUser.password)
        cy.url().should('include', '/inventory.html');
        onInventoryPage.addItemToCart('Sauce Labs Backpack')
    })
    // This test should fail
    it('3.Login as problem user and validate image for item', () => {
        const problemUser = Cypress.env('users').problem;
        onLoginPage.loginUser(problemUser.username, problemUser.password)
        onInventoryPage.validateImageForItem('Sauce Labs Onesie','red-onesie')        
    })

    it('4.Login as locked user and validate error', () => {
        const lockedUser = Cypress.env('users').locked;
        onLoginPage.loginUser(lockedUser.username, lockedUser.password)
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
       
    })
    // This test should fail
    it('5.Login as error user and validate error', () => {
        const errorUser = Cypress.env('users').error;
        onLoginPage.loginUser(errorUser.username, errorUser.password)
        onInventoryPage.addItemToCart('Sauce Labs Fleece Jacket')
    })
})
