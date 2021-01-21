describe("Test to check push", () => {
 
    context("User opens baseUrl", () => {
      beforeEach(() => {
        cy.visit("");

      });
  
      it("Behance logo is visible and clickable", () => {
        
        cy.get('button#onetrust-accept-btn-handler', { timeout: 20000 }).should('be.visible');
        cy.get('div[class^="PrimaryNav-logoWrap"]').should("be.visible");

      });

    });
  });