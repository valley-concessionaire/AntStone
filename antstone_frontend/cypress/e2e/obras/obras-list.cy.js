/// <reference types="cypress" />
describe("Load and show obras", () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      
      cy.visit("http://localhost:3000/");
    });
  
    it("Check a successful login", () => {
      
      cy.get("#emailAddress").type("gerente@example.com");
  
      cy.get("#password").type("desarrollo1?");
  
      cy.get('[type="submit"]').click();
  
      cy.intercept(
        {
          method: "POST",
          url: "http://localhost:8000/api/users/authenticate",
        },
        {
          statusCode: 200,
          body: {
            access: "message",
          },
          headers: { "access-control-allow-origin": "*" },
          delayMs: 500,
        }
      ).as("postAuth");
  
  
      cy.wait("@postAuth");
  
      cy.wait(1000);

      cy.visit("http://localhost:3000/");

      cy.fixture('obras').then((obras) => {
        // Intercept the API request and return the fixture data
        cy.intercept('GET', 'http://localhost:8000/api/obras/', {
          statusCode: 200,
          body: obras
        }).as('getObras');
      });   

      cy.contains('a', 'Obras').click();
      
      cy.wait('@getObras');

      cy.get('tbody')
      .children('tr')   
      .should('have.length.greaterThan', 1);


    });
  
  
  });
  