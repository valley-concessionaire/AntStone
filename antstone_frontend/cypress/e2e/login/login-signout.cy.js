/// <reference types="cypress" />
describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/");
  });

  
  it("Check a failed login", () => {
    cy.get("#emailAddress").type("gerente@example.com");

    cy.get("#password").type("desarrollo1?");

    cy.get('[type="submit"]').click();

    cy.intercept(
      {
        method: "POST",
        url: "http://localhost:8000/api/users/authenticate",
      },
      {
        statusCode: 400,
        body: {
          access: "message",
        },
        headers: { "access-control-allow-origin": "*" },
        delayMs: 500,
      }
    ).as("postError");

    cy.wait("@postError");

    cy.get('[role="alert"]').should('be.visible');
    
  });
});
