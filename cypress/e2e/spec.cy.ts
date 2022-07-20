/// <reference types="cypress" />

describe("Seach books integration tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Seach books should render without crashing", () => {
    cy.get("[test-id='searchBook-container']");
  });

  it("Test should input a searcj query and open library API should respond with 200", () => {
    cy.get("[test-id='CustomInput-id']").type("pokemon");
    cy.get("[test-id='customButton-id']").click();

    cy.intercept("GET", `http://openlibrary.org/search.json?q=**`).as(
      "getBookList"
    );

    cy.wait("@getBookList", { timeout: 20000 })
      .its("response.statusCode")
      .should("eq", 200);
  });
});
