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
        stage('Checkout'){
            steps{
                git credentialsId: 'git-credential', url: 'https://github.com/zahidin/EXQL'
            }
        }
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
                sh 'docker-compose up'
            }
        }    
    }
}