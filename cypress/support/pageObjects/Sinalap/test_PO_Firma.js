class test_POF{
    

    
    Master_firma(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            
            cy.visit('http://10.16.3.36:8002/#/login'),
            cy.title().should('eq','Iniciar sesión')
            cy.wait(tiempo)

            //Firma de Servicios nuevo usuario             
            cy.get('#usuario').should('be.visible').type('lab.diag6')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('senasica')
            cy.wait(tiempo)
            cy.get("#btn-recepcion-ingresar").should('be.visible').click({force: true})
            cy.wait(tiempo)
           

            //Menu firma de Servicios.
            cy.get('#a-laboratorio-firma-servicios').should('be.visible').click({force: true})
            cy.wait(5000)
        

           
            cy.get(".tableBodyScroll  tr td span ").invoke("attr","visibility: hidden").then(()=>{
                
                // let bandera=cy.get("[title='']").should("not.be.visible").then(()=>{
                //     bandera.each(($el,index,$list)=>{
                //         cy.log("muestra: " + index)
                //             for(let i=1; i<=1; i++){
                //                 cy.get($el).click({force: true})
                //                 cy.wait(1000)
                //                 cy.scrollTo(0, 600)
                //                 cy.wait(4000)
                //                 cy.get('#check-firmar-por-orden').click({force: true})
                //                 cy.scrollTo(0, 600)
                //                 cy.wait(tiempo)
                //                 cy.get('#tr-seleccion-servicio-0 > td').dblclick({force: true})
                //                 cy.wait(3000)
                //             }
                //         })    
                // })

                let bandera=cy.get("[title='']").should("not.be.visible").then(()=>{                   
                    bandera.first().click({force: true})
                    cy.wait(1000)
                    cy.scrollTo(0, 600)
                    cy.wait(1000)
                    cy.get('#check-firmar-por-orden').click({force: true})
                    cy.scrollTo(0, 600)
                    cy.wait(tiempo)
                    cy.get('#tr-seleccion-servicio-0 > td').dblclick({force: true})
                    cy.wait(1000)                          
                })          

            }).then(()=>{
                cy.log("Todas estan activas")
            })
            

            


            //Comienza Resultados
            cy.get('#a-laboratorio-resultados').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //buscando
            cy.get("#tr-muestra-pendiente-0").should("be.visible").click({force:true})
            cy.wait(1000)
            cy.get('#btn-asignar-resultado-pendientes-0').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#select-captura-resultado-0').select('1: DETECTADO')
            cy.wait(tiempo)
            cy.get('#select-captura-resultado-1').select('1: DETECTADO')
            cy.wait(tiempo)
            cy.get('#btn-captura-resultados-guardar').should('be.visible').click({force: true})
            cy.wait(tiempo)

            // //Muestra terminada
            // cy.get('#tab-resultados-muestras-terminadas').should('be.visible').click({force: true})
            // cy.wait(tiempo)
            
            //Revisión
            cy.get('#a-laboratorio-revision').should('be.visible').click({force: true})
            cy.wait(1500)
            //Abrir carpeta
            cy.get('#carpeta-abrir-cerrar-orden-2').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //enviar orden
            cy.get('#btn-revision-enviar-orden').should('be.visible').click({force: true})
            cy.wait(tiempo)

           

            //Salir
            cy.get('#a-cerrar-sesion').click({force: true})
            cy.reload()
            cy.wait(tiempo)

            //Ultimo proceso
            cy.wait(2000)
            cy.get('#usuario').should('be.visible').type('emision1')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('senasica')
            cy.wait(tiempo)
            cy.get("#btn-recepcion-ingresar").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //click menu resultados
            cy.get('#a-emision-resultados').should('be.visible').click({force: true})
            cy.wait(tiempo)
            //Filtro
            cy.get('#select-filtro-ordenes').select("Pagadas")
            cy.wait(tiempo)
            //Descarga uno
            cy.get('#btn-generar-resultados-0').should('be.visible').click({force: true})
            cy.wait(2000)
            cy.get('#btn_generar_informe_resultados').should('be.visible').click({force: true})
            cy.wait(tiempo)

            




        }
       

    }//final bloque master


   



}//final

export default test_POF;