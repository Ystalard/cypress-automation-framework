import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const autoStoreHomePagePO = new AutoStore_HomePage_PO();
    const autoStoreHairCarePO = new AutoStore_HairCare_PO();
    before(function () {
      cy.fixture("products").then(function (data) {
        globalThis.data = data;
      });
    });
  
    beforeEach(function () {
        autoStoreHomePagePO.accessHomePage();
        autoStoreHomePagePO.clickOn_HairCare_Link();
      
    })

    it("Add specific items to basket", () => {
        data.productName.forEach(function (element) {
            autoStoreHairCarePO.addProductToBasket(element);
        })

        cy.get('.dropdown-toggle > .fa').click();
    });
  });
  