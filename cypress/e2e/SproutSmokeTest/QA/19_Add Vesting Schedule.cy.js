 /// <reference types="cypress"/>

 describe('SproutSmokeTest_QA',()=>{
  beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.viewport('macbook-15')
      cy.loginWithLocalstorage()
      cy.loginOnQA('mike.z@getsprout.co','Mike_1983')
      cy.wait(10000)
    })

    it('1.19 Add and Remove Vesting Schedule',()=>{
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Securities settings').click()
    cy.wait(1000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Shares').click()
    cy.get('[data-row-key="4740"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.get('#schedule_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-7 > .form-control').select('sdsd')
    cy.get('#vesting_start_date > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#schedule_step1 > .modal-footer > .btn').click()
    cy.get('.form-horizontal > .form-group > #reason_for_modification > .form-control').type('Test From Mike')
    cy.get('#schedule_step2 > .modal-footer > .btn').click()
    cy.get('#schedule_step3 > .modal-footer > .btn').click()
    cy.contains('sdsd').should('be.exist')
    cy.visit('/home/summary')
    cy.wait(10000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Securities settings').click()
    cy.wait(1000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Shares').click()
    cy.wait(10000)
    cy.get('[data-row-key="4740"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.get(':nth-child(2) > .form-group > .acceleration_terms_a').click()
    cy.get('#removeVestingSchedule > .modal-footer > :nth-child(2)').click()
    cy.wait(2000)
    cy.contains('sdsd').should('not.visible')
    cy.visit('/home/summary')
    cy.wait(10000)
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})