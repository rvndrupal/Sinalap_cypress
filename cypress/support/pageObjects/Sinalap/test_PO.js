class test_PO{
    visitHome(t){
        let tiempo=t
        
      
        //Cypress.config("defaultCommandTimeout",15000)      
        before(()=>{    
          cy.visit('https://libssl.senasica.gob.mx/adefoc/login'),
          cy.title().should('eq','Frontend')
          cy.wait(tiempo)
          
          //Login
          cy.get('#username').should('be.visible').type('estela.flores')
          cy.wait(tiempo)
          cy.get('#password').should('be.visible').type('SENA2020')
          cy.wait(tiempo)
          cy.xpath("//button[@class='btn btn-primary'][contains(.,'Acceder')]").should('be.visible').click({force: true})
          cy.wait(tiempo)

          //Registro solicitud menu
          cy.xpath("//a[@href='consulta-unidad']").should('be.visible').click({force: true})
          cy.wait(tiempo)
          cy.get('#id_ir_consulta_unidad').should('be.visible').click({force: true})
          cy.wait(tiempo)     
          cy.get('#id_clave_unidad').should('be.visible').clear().type('320571043072')
          cy.wait(tiempo)
          cy.get('#id_buscar_unidad').should('be.visible').click({force: true})
          cy.wait(tiempo)
        })
    }

    
    Master(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {

            cy.visit('http://10.16.3.36:8002/#/login'),
            cy.title().should('eq','Iniciar sesión')
            cy.wait(tiempo)

           
            
            //Login
            cy.get('#usuario').should('be.visible').type('recepcion1')
            cy.wait(tiempo)
            cy.get('#contrasenia').should('be.visible').type('senasica')
            cy.wait(tiempo)
            cy.get("#btn-recepcion-ingresar").should('be.visible').click({force: true})
            cy.wait(tiempo)

      

            //Recepcion
            cy.get('#a-recepcion').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#a-recepcion-captura').should('be.visible').click({force: true})
            cy.wait(tiempo)

           

            function seleccionar_cliente(pag){  
                         cy.xpath(''+pag+'').should('be.visible').click({force: true})
                         cy.wait(tiempo) 
                         cy.log("seleccionado paginador")  
                         cy.get('[title="111300"]').contains("111300").first().click({force: true})
                         cy.wait(tiempo)                            
            }

            seleccionar_cliente("//a[contains(@id,'paginador-back-participante-component-pagina-0')]")
            

        //    cy.wait(99999999)

            //Seleccionar domicilio
            // cy.get('#td-domicilio-direccion-0').should('be.visible').click({force: true})
            // cy.wait(tiempo)
            let ale1=Math.floor(Math.random() * 9897685645354);
            let N_orden=0

            // //correo responsable, electronico y Email
            cy.get('#respNombre').should('be.visible').clear().type('Responsable #'+ale1)
            cy.wait(tiempo)
            cy.get('#select-orecen-servicio-tipo-envio').select('1: Object').should('have.value','1: Object')
            cy.wait(tiempo)
            cy.get('#correo').should('be.visible').clear().type('noemi.delgado.c@senasica.gob.mx')
             cy.wait(tiempo)
            cy.get('#btn-orden-servicio-guardar-actualizar').should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Capturar orden de servicio
            cy.get('#input-orden-servicio-numero').invoke('removeAttr',"disabled")
            cy.wait(800)
            cy.xpath("//*[@id='input-orden-servicio-numero']").should('be.visible').then((val)=>{
                N_orden=val.val()
                cy.log("La orden es: "+N_orden)
            })
            cy.wait(tiempo)
            //Muestras
            cy.get('#a-recepcion-muestras').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#btn-muestra-agregar-muestra').should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Agregar Muestra
            cy.wait(1500)
            cy.get('#input-captura-muestra-autocomplete-descripcion').should('be.visible').type('Descripcion indeterminada #'+ale1)
            cy.wait(tiempo)
            cy.get('#select-captura-muestra-cat-especie').select('23: Object').should('have.value','23: Object')
            cy.wait(1000)
            let oisa_Arr = ["2: Object", "3: Object","4: Object","5: Object"];
            let Random_oisa = oisa_Arr[Math.floor(Math.random()*oisa_Arr.length)]; 
            cy.get('#select-captura-muestra-tif-oisa').select(Random_oisa).should('have.value',Random_oisa)
            cy.wait(1000)
            let cantidad_Arr = ["2", "3","4","5"];
            let Random_cantidad = cantidad_Arr[Math.floor(Math.random()*cantidad_Arr.length)]; 
            cy.get('#input-captura-muestra-cantidad').clear().should('be.visible').type(Random_cantidad)
            cy.wait(tiempo)
            cy.get('#input-captura-muestra-poblacion').should('be.visible').type(ale1-987665)
            cy.wait(tiempo)
            let ale2=Math.floor(Math.random() * 9897);
            cy.get('#input-captura-muestra-clave-senasica').should('be.visible').type('Cla#'+ ale2)
            cy.wait(tiempo)
            cy.get('#input-captura-muestra-lote').should('be.visible').type('Lote #'+ ale2+100)
            cy.wait(tiempo)
            cy.get('#input-captura-muestra-caso').should('be.visible').type('Caso #'+ale2+350)
            cy.wait(tiempo)
          
            //fechas
            let fecha=new Date()
            let dia  = (fecha.getDate() + 0).toString().padStart(2, "0");
            let mes  = (fecha.getMonth() + 1).toString().padStart(2, "0");
            let anio = fecha.getFullYear();
            let fechaOk=(dia+"-"+mes+"-"+anio)
            cy.log(fechaOk)             
            cy.get('#fechaEnvio').should('be.visible').type(fechaOk)
            cy.wait(tiempo)
            let dia2  = fecha.getDate() + 7;
            let fechaOk2=(dia2+"-"+mes+"-"+anio)
            cy.get('#fechaToma').should('be.visible').type(fechaOk2)
            cy.wait(tiempo)
            cy.get('#input-captura-muestra-certificado-observaciones').should('be.visible').type('Observacion #' + ale1)
            cy.wait(tiempo)

            //importador
            // cy.scrollTo('0%', '-20%',{ duration: 500 }) 
            // cy.wait(tiempo)
            cy.get('#a-captura-muestra-importador-tab').click({force: true})
            cy.wait(tiempo)
            cy.log("click importador")

            // cy.scrollTo('0%', '20%',{ duration: 500 }) 
            // cy.wait(tiempo)
|
            
            //Seleccionar cliente
            cy.xpath("(//a[@class='page-link'][contains(.,'1')])[3]").should('be.visible').click({force: true})
            cy.wait(tiempo)            
            cy.get('.modal-ancho [title="NOEMI DELGADO GAMBOA"]').contains("NOEMI DELGADO GAMBOA").then((val)=>{
                let va=val.text()
                cy.log(va)
                cy.get('.modal-ancho [title="NOEMI DELGADO GAMBOA"]').first().click({ force: true})
                cy.wait(tiempo)  
            })
                      
            //Seleccionar domicilio
            cy.xpath("//td[@class='texto-limitado col-md-4'][contains(.,'CALLE 2 MARIA DEL MAR')]").click({force: true})
            cy.wait(tiempo)
            cy.get('#btn-captura-muetra-aceptar-importador-modal').click({force: true})
            cy.wait(tiempo)  
            //hasta aqui ok  segun ya quedo ojo modal clase




            //Producto_propietario            
            cy.get('#a-captura-muestra-productor-propietario-tab').click({force: true})
            cy.wait(tiempo)
            
            
            //Seleccionar cliente producto propietario
            cy.xpath("(//a[@class='page-link'][contains(.,'1')])[5]").click({force: true})
                    
            cy.get('.modal-ancho [title="NOEMI DELGADO GAMBOA"]').contains("NOEMI DELGADO GAMBOA").then((val)=>{
                let va=val.text()
                cy.log(va)                 
                cy.get('.modal-ancho #tr-propietario-imp-prod-0 > .col-md-3').click({ force: true})
                cy.wait(tiempo)  
            })

            cy.wait(tiempo)
            cy.xpath("(//td[@class='texto-limitado col-md-4'][contains(.,'CALLE 2 MARIA DEL MAR')])[2]").click({force: true})
            cy.wait(tiempo)
            cy.get('#btn-captura-muetra-aceptar-propietario-modal').click({force: true})
            cy.wait(tiempo)
            //Producto ok hasta aqui


            //Pestaña origen
            cy.get('#a-captura-muestra-origen-tab').click({force: true})
            cy.wait(tiempo)
            let entidad_Arr = ["38: Object", "39: Object","41: Object"];
            let Random_entidad = entidad_Arr[Math.floor(Math.random()*entidad_Arr.length)]; 
            cy.get('#select-origen-origen-destino-cat-estado').select(Random_entidad)
            cy.wait(2000)
            if(Random_entidad=="38: Object"){
                let municipio_Arr = ["Aguascalientes", "Asientos","Calvillo","Cosío"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.get('#select-origen-origen-destino-cat-municipio').select(Random_municipio)
                cy.wait(1000)
                cy.get('#btn-origen-origen-destino-guardar-origen').should('be.visible').click({force: true})
                cy.wait(tiempo)
            }
            else if(Random_entidad=="39: Object"){
                let municipio_Arr = ["Ensenada", "Mexicali","OTRO","Playas de Rosarito"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.get('#select-origen-origen-destino-cat-municipio').select(Random_municipio)
                cy.wait(1000)
                cy.get('#btn-origen-origen-destino-guardar-origen').should('be.visible').click({force: true})
                cy.wait(tiempo)
            }
            else if(Random_entidad=="41: Object"){
                let municipio_Arr = ["Calakmul", "Calkiní","Campeche","Candelaria"];
                let Random_municipio = municipio_Arr[Math.floor(Math.random()*municipio_Arr.length)]; 
                cy.get('#select-origen-origen-destino-cat-municipio').select(Random_municipio)
                cy.wait(1000)
                cy.get('#btn-origen-origen-destino-guardar-origen').should('be.visible').click({force: true})
                cy.wait(tiempo)
            }

            cy.get('#btn-captura-muetra-aceptar-origen-modal').should('be.visible').click({force: true})
            cy.wait(tiempo)


            //Comienza pestaña Destino
            cy.xpath("//a[@href='#tab-muestra-06']").click({force: true})
            cy.wait(tiempo)
            let entidad2_Arr = ["38: Object", "39: Object","41: Object"];
            let Random_entidad2 = entidad2_Arr[Math.floor(Math.random()*entidad2_Arr.length)]; 
            cy.get('#select-destino-origen-destino-cat-estado').select(Random_entidad2)
            cy.wait(2000)
            if(Random_entidad2=="38: Object"){
                let municipio2_Arr = ["Aguascalientes", "Asientos","Calvillo","Cosío"];
                let Random_municipio2 = municipio2_Arr[Math.floor(Math.random()*municipio2_Arr.length)]; 
                cy.get('#select-destino-origen-destino-cat-municipio').select(Random_municipio2)
                cy.wait(1000)
                cy.get('#btn-destino-origen-destino-guardar-destino').should('be.visible').click({force: true})
                cy.wait(tiempo)
            }
            else if(Random_entidad2=="39: Object"){
                let municipio2_Arr = ["Ensenada", "Mexicali","OTRO","Playas de Rosarito"];
                let Random_municipio2 = municipio2_Arr[Math.floor(Math.random()*municipio2_Arr.length)]; 
                cy.get('#select-destino-origen-destino-cat-municipio').select(Random_municipio2)
                cy.wait(1000)
                cy.get('#btn-destino-origen-destino-guardar-destino').should('be.visible').click({force: true})
                cy.wait(tiempo)
            }
            else if(Random_entidad2=="41: Object"){
                let municipio2_Arr = ["Calakmul", "Calkiní","Campeche","Candelaria"];
                let Random_municipio2 = municipio2_Arr[Math.floor(Math.random()*municipio2_Arr.length)]; 
                cy.get('#select-destino-origen-destino-cat-municipio').select(Random_municipio2)
                cy.wait(1000)
                cy.get('#btn-destino-origen-destino-guardar-destino').should('be.visible').click({force: true})
                cy.wait(tiempo)
            }

            cy.get('#btn-captura-muetra-aceptar-destino-modal').click({force: true})
            cy.wait(tiempo)

            cy.wait(2500)
            //Guardamos todo el bloque
            cy.get('#btn-captura-muetra-guardar-modal').click({force: true})
            cy.wait(tiempo)
            //termina bloque muestra


            //Muestras agregar el 1000
            cy.get('#checkbox-muestra-seleccion-0').should('be.visible').click({force: true})
            cy.wait(1500)
            cy.get('.ng-input > input').type('1000 -Identificación de ADN del herpes virusdel ostion por qPCR').type("{enter}")
            cy.wait(1500)
            cy.get('#btn-muestra-agregar-servicio').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#i-muestra-seleccion').should('be.visible').click({force: true})
            cy.wait(tiempo)

            //orden de servicio
            cy.get('#a-recepcion-orden-servicio').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#btn-orden-servicio-pagos').should('be.visible').click({force: true})
            cy.wait(tiempo)

            //Captura de Pagos
            cy.get('#fecha').should('be.visible').type(fechaOk)
            cy.wait(tiempo)
            let ale3=Math.floor(Math.random() * 3000);
            cy.get('#input-pago-cie').should('be.visible').type('cie#'+ale3)
            cy.wait(tiempo)
            cy.get('#select-pago-servicio').select('1: Object')
            cy.wait(tiempo)

            //sacar el monto total.
            cy.get('#input-pago-total').invoke('removeAttr',"disabled")
            cy.wait(1000)
            cy.get('#input-pago-total').should('be.visible').then((val)=>{
                let to=val.val()
                let total=to.replace('$','')
                let totalOk=total.trim()
                cy.log(totalOk)
                //Pagando
                cy.get('#input-pago-monto').should('be.visible').type(totalOk)
                cy.wait(tiempo)
                cy.get('#input-pago-guardar').should('be.visible').click()
                cy.wait(1000)
                cy.get('#btn-pago-cerrar-pagos').should('be.visible').click({force: true})
                cy.wait(1000)

            })
            cy.wait(tiempo)

            //Entregar Orden de Servicio
            cy.get('#btn-orden-servicio-entregar-abrir-recepcion').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#inp-entrega-usuario').should('be.visible').type('lab.diag6')
            cy.wait(tiempo)
            cy.get('#inp-entrega-password').should('be.visible').type('senasica')
            cy.wait(tiempo)
            cy.get('#textarea-entrega-descripcion').should('be.visible').type('Orden de entrega #'+ale2)
            cy.wait(tiempo)
            cy.get('#btn-entrega-aceptar-entrega').should('be.visible').click({force: true})
            cy.wait(tiempo)

            //seguimiento
            cy.get('#a-recepcion').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#a-recepcion-seguimiento').should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.get('#a-cerrar-sesion').click({force: true})
            cy.reload()
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
                
              let bandera=cy.get("[title='']").should("not.be.visible")
              bandera.each(($el,index,$list)=>{
                  cy.log($el)
                  cy.get($el).click({force:true})
                  cy.wait(1000)
                  cy.get('#tr-seleccion-servicio-0 > td').dblclick({force: true})
                  cy.wait(2000)                  
              })
           

            })
            cy.get('#check-firmar-por-orden').click({force:true})
            cy.wait(tiempo)  


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

            //Muestra terminada
            cy.get('#tab-resultados-muestras-terminadas').should('be.visible').click({force: true})
            cy.wait(tiempo)

            
           


            // cy.wait(9999999)
            





            

            
           



            //cy.wait(999999999)    


            //Salir
            cy.get('#a-cerrar-sesion').click({force: true})
            cy.reload()
            cy.wait(tiempo)
        }
       

    }//final bloque master


   



}//final

export default test_PO;