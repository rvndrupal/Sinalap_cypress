import test_PO from '../../support/pageObjects/Sinalap/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Proyecto Adefoc Modulo uno', () =>{ 

    const master= new test_PO()
    let numero_pruebas=1
    let tiempo_general=800

    //master.visitHome(500)
    
   
    it.only('Master sinalap', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master(tiempo_general,numero_pruebas)
        
    })


    
});