describe("Visit the page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("It should visit the homepage", () => {
    cy.get(".task-input")
      .focused()
      .type("Do some task")
      .should("have.value", "Do some task");
  });

  it("Accept the value from the form", () => {
    cy.get(".task-input").type("Do some task").type("{enter}");

    cy.get(".toggle-checkbox").click();

    cy.get(".label").should("have.css", "color", "rgb(0, 128, 0)");
  });
});
