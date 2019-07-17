pipeline{
    agent any
    tools {nodejs "node"}
    stages{
        // stage('Initialize Docker'){
        //     steps{
        //         def dockerHome = tool 'docker'
        //         env.PATH = "${dockerHome}/bin:${env.PATH}"
        //     }
        // }
        stage('Node Package'){
            steps{
                sh 'npm install'
            }
        }
        stage('Clear Dockercompose'){
            steps{
                sh 'docker-compose down'
            }
        }
        stage('Run Dockercompose File'){
            steps{
                sh 'docker-compose up -d'
            }
        }    
        stage('Import Database'){
            steps{
                sh 'docker exec -i postgressql  psql -U postgres boilerplate < boilerplate.sql;'
            }
        }
    }
}