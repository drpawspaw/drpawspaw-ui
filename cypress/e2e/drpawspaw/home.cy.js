import { SHOW_MESSAGE } from "../../../src/constants";

describe("https://drpawspaw.com - Homepage", () => {
  // Visit Page
  beforeEach(() => {
    cy.visit("https://drpawspaw-ui.web.app"); // Change this to http://localhost:3000 in local enviroment
    cy.url().then((value) => {
      sessionStorage.setItem(SHOW_MESSAGE, false) // Disable `Welcome Message` Screen
      cy.log("Current page uri: ", value);
    });
  });

  it("Check the homepage components", () => {
    // Check the welcome message on the navbar
    cy.log("Check the navbar greeting message")
    cy.contains("Good").should("exist");
    
    // Check the first message from the chatbot
    cy.log("Check the first message from chatbot")
    cy.contains("Hi! how can I help you?").should("exist");

    // Check the login button and it's functionality
    cy.get("button#google-login").click().then(() => {
        cy.log("Check the login/signup button")
        cy.contains("Continue with Google").should("exist")
    })
  });

  it("Check the chat functionality - scenario #1", () => {
    cy.log("Check disease prediction functionality - SUGGESTION STATE");
    cy.get("input").type("My dog has been vomiting and has diarrhoea ?");
    cy.get("button#chat-send-message").click();
    cy.wait(20000).then(() => {
      cy.contains(
        "According to the information that has been provided to us, we are unable to identify the specific disease; however, it may be Babesiosis, Distempter. It would be helpful to perform a more accurate prediction if you could provide more symptoms out of the following symptoms."
      ).should("exist");
      cy.contains(
        "Here are the symptoms:"
      ).should("exist");
    });
  });

  it("Check the chat functionality - Scenario #2", () => {
    cy.log("Check disease prediction functionality - PREDICTION STATE");
    cy.get("input").type("My dog has high fever and running nose ?");
    cy.get("button#chat-send-message").click();
    cy.wait(20000).then(() => {
      cy.contains("We are able to predict the disease as Pneumonia").should(
        "exist"
      );
      cy.contains(
        "Here are the treatments for Pneumonia is Non-steroidal anti-inflammatory medications for fever and pain, and bronchodilators and expectorants for coughing and breathing problems.In more severe cases hospitalization may be necessary to allow for more intensive treatments such as supplemental oxygen, intravenous antibiotics, or fluid therapy. (Source: https://www.matthews.carolinavet.com/site/pet-health-blog/2021/05/14/pneumonia-in-dogs-causes-symptoms-treatments)."
      ).should("exist");
    });
  });

  it("Check the chat functionality - Scenario #3", () => {
    cy.log("Check disease prediction functionality - LIMITATION STATE");
    cy.get("input").type(
      "My dog has bad fever and diarrhoea and running nose ?"
    );
    cy.get("button#chat-send-message").click();
    cy.wait(20000).then(() => {
      cy.contains(
        "Based on the information that we have, we are unable to determine what disease it is because we do not have the necessary expertise."
      ).should("exist");
    });
  });
});
