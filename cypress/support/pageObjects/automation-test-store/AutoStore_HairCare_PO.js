class AutoStore_HairCare_PO {
    addProductToBasket(productName) {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text() === productName) {
                cy.log($el.text())
                cy.get('.productcart').eq(index).click();
            }
        });
    }
}

export default AutoStore_HairCare_PO;