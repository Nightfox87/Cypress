it("Should open the main page", () => {
  cy.visit("/");
  cy.contains("Books list").should("be.visible");
});

it("Successfull login", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("test@test.com").should("be.visible");
  cy.contains("Add new").should("have.class", "btn");
});

it("Wrong password", () => {
  cy.visit("/");
  cy.login("test@test.com");
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Add new book", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addBook("Основание", "Научно-фантастический роман", "Айзек Азимов");
  cy.contains("Основание").should("be.visible");
});

it("Add and delete book to favorites", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Основание").should("be.visible");
  cy.contains("Add to favorite").click();
  cy.contains("Favorites").click();
  cy.contains("Основание").should("be.visible");
});

it("Delete book from favorites", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Favorites").click();
  cy.contains("Основание").should("be.visible");
  cy.contains("Delete from favorite").click();
  cy.contains("Please add some book to favorit on home page!");
});
