class AutoStore_HomePage_PO {
    accessHomePage() {
        cy.visit('https://www.automationteststore.com/');
    }

    clickOn_HairCare_Link() {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    }
}   

export default AutoStore_HomePage_PO;