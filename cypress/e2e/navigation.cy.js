describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });
  it("home", () => {
    cy.get("[data-cy=nav-home]").click();
  });
  it("about", () => {
    cy.get("[data-cy=nav-about]").click();
  });
  it("sets", () => {
    cy.get("[data-cy=nav-sets]").click();
  });
});
