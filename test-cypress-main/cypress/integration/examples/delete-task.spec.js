describe("Visit the page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("delete task from todos", () => {
    cy.get(".task-input").type("Do some task").type("{enter}");

    cy.get("#btn1").click();
    cy.get("li");
    // .should("have", "color", "rgb(0, 128, 0)")
    // cy.get(".task-list li").should("have.length", 2);
  });
});
