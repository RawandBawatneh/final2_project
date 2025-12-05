describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });
  it("happy path", () => {
    cy.get("[data-cy=set-name]").type("MySet");
    cy.get("[data-cy=submit-set]").click();
  });
  it("unhappy path", () => {
    cy.get("[data-cy=submit-set]").click();
  });
});
