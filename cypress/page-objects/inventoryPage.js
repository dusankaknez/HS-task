class InventoryPage{
    addItemToCart(itemName){
        cy.contains('[data-test="inventory-item-description"]', itemName).find('button').click();
        cy.contains('[data-test="inventory-item-description"]', itemName).should('contain', 'Remove');
    }
    validateImageForItem(itemName,imgName){
        cy.contains('[data-test="inventory-item"]', itemName).find('img').should('have.attr','src' ).and('include','red-onesie');

    }
}

export  const onInventoryPage= new InventoryPage()