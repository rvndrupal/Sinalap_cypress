pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'  
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }
                

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'  
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }
                

                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'  
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

                

                stage('Slave 5') {
                    agent {
                        label "Agent1_5"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'  
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

                

                stage('Slave 6') {
                    agent {
                        label "Agent1_6"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npm install'
                        bat 'npm update'  
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

                
                stage('Slave 7') {
                    agent {
                        label "Agent1_7"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

                stage('Slave 8') {
                    agent {
                        label "Agent1_8"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

                stage('Slave 9') {
                    agent {
                        label "Agent1_9"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }

                stage('Slave 10') {
                    agent {
                        label "Agent1_10"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Test_Adefoc_cypress.git'
                        bat 'npx cypress run cypress run --record --key 3313dcb4-bec7-4652-8872-3d77817d4099  --parallel'
                                              
                    }
                }
                



               

                
                
                  
            }

             
        }

    }
            
}