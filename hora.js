describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1536, 722)
 
    cy.visit('https://libssl.senasica.gob.mx/adefoc/consulta-solicitudes/dictamen-tuberculosis')
 
    cy.get('.panel-collapse > .panel-body > .ng-invalid > .row:nth-child(4) > .form-group').click()
 
    cy.get('.panel-body > .ng-invalid > .row > .col-md-6 > #id_hora_inyeccion').click()
 
    cy.get('.panel-body > .ng-invalid > .row > .col-md-6 > #id_hora_inyeccion').click()
 
    cy.get('.panel-body > .ng-invalid > .row > .col-md-6 > #id_hora_inyeccion').click()
 
    cy.get('.panel-body > .ng-invalid > .row > .col-md-6 > #id_hora_inyeccion').type('07:00:00')
 
    cy.get('.panel-body > .ng-invalid > .row > .col-md-6 > #id_hora_inyeccion').click()
 
    cy.get('.pace-done > app-root > app-dictamen-tuberculosis > main').click()
 
 })

})
