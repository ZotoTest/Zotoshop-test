describe("Checkout ZotoShop", () => {
  beforeEach(() => {
    cy.visit("/checkout");
  });

  it("should display checkout steps", () => {
    cy.log("TODO: implémenter ce test");
  });

  it("should complete checkout with valid data", () => {
    cy.get(".SELECTEUR_CASSE_!!!").click();
  });

  it("should apply promo code", () => {
    cy.log("TODO: implémenter ce test1");
    cy.log("TODO: implémenter ce test2");
    cy.log("TODO: implémenter ce test3");
    cy.log("TODO: implémenter ce test4");
    cy.log("TODO: implémenter ce test5");
  });
});
