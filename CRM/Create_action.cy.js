describe("Create Action", function() {
  it("Create Action", function(){
      cy.visit("https://1657610772-tt.pharmahrm.com/login")
      cy.get('input[name="_username"]').type('Administrator')
      cy.get('input[name="_password"]').type('Flvby%Hcf')
      cy.get('button[class="btn btn-primary"]').click()
      cy.get('a[class="bundle-item clearfix team_soft_crm"]').click()
      cy.get('.btn-add').click()
      cy.get('.nav > :nth-child(2) > .ng-binding').click()
      cy.get('input[id="action-actiontype"]').click()
      cy.get(':nth-child(1) > .list-group-item-heading > .ng-binding').click()
      cy.get('.modal-footer > .btn-primary').click()
  })
})