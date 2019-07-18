def date = new Date()

@NonCPS
def getChangeString() {
    MAX_MSG_LEN = 100
    def changeString = ""
    
    def changeLogSets = currentBuild.changeSets
    
    for (int i = 0; i < changeLogSets.size(); i++) {
        def entries = changeLogSets[i].items

        for (int j = 0; j < entries.length; j++) {
            def entry = entries[j]
            truncated_msg = entry.msg.take(MAX_MSG_LEN)
            changeString += " - ${truncated_msg} [${entry.author}]\n"
        }
    }

    if (!changeString) {
        changeString = " - No new changes"
    }

    return changeString
}

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
                sh 'docker exec -i postgressql  psql -U root boilerplate < boilerplate.sql;'
            }
        }
    }
    post {
        failure {
            sh 'docker-compose down'
            sh 'docker-compose up -d'
            telegramSend "❌ *BUILD FAILED* \n\nProject: ${env.JOB_NAME} \nDate of build: ${date} \nBuild duration: ${currentBuild.durationString} \n\nCHANGES \n" + getChangeString() 
        }
        success {
            telegramSend "✅ *BUILD SUCCESS* \n\nProject: ${env.JOB_NAME} \nDate of build: ${date} \nBuild duration: ${currentBuild.durationString} \n\nCHANGES \n" + getChangeString()
        }
    }
}