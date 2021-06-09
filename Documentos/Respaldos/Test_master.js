import test_PO from '../../support/pageObjects/Sinalap/test_PO'
import test_POF from '../../support/pageObjects/Sinalap/test_PO_Firma'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Proyecto Sinalap Prueba uno', () =>{ 

    const master= new test_PO()
    const masterF= new test_POF()
    let numero_pruebas=1
    let tiempo_general=500


    //master.visitHome(500)
    
   
    it('Master sinalap', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master(tiempo_general,numero_pruebas)
        
    })

    it('Master sinalap Firma', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        masterF.Master_firma(tiempo_general,numero_pruebas)
        
    })


    
});