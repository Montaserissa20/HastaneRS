import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
    cy.visit("/");
});

When("I select a doctor {string}", (doctorName) => {
    cy.contains(doctorName).click();
});

When("I choose a time {string}", (time) => {
    cy.contains(time).click();
});

When("I click {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

Then("I should see a confirmation message {string}", (message) => {
    cy.contains(message).should("be.visible");
});
