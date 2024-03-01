class AutoStore_HairCare_PO {
    constructor() {
        this.setProductNames();
    }

    setProductNames() {
        cy.fixture("products").then((data) => {
            this.products = data;
        });
    }

    addProductToBasket() {
        this.products.productName.forEach(function (element) {
            cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
                if($el.text() === element) {
                    cy.get('.productcart').eq(index).click();
                }
            })
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}

export default AutoStore_HairCare_PO;