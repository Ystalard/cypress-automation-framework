import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  let autoStoreHomePagePO
  let autoStoreHairCarePO
  before(() => {
    autoStoreHomePagePO = new AutoStore_HomePage_PO();
    autoStoreHairCarePO = new AutoStore_HairCare_PO();
  });

  beforeEach(function () {
    autoStoreHomePagePO.accessHomePage();
    autoStoreHomePagePO.clickOn_HairCare_Link();

  })

  it("Add specific items to basket", () => {
    autoStoreHairCarePO.addProductToBasket();

    cy.get('.dropdown-toggle > .fa').click();
  });
});
