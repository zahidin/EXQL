def date = new Date()
def TOKEN_BOT_TELE = "903153604:AAHd4_Oh7dIz2ohd1N80gi931NL6F0551yQ"
def CHAT_ID_TELE = 333691530

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
        stage('Send Notification Before Build') {
            steps {
                sh "curl -s -X POST https://api.telegram.org/bot${TOKEN_BOT_TELE}/sendMessage -d chat_id=-${CHAT_ID_TELE} -d text='✴️ *BUILD RUNNING* \n\nProject: ${env.JOB_NAME} '"
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
            sh "curl -s -X POST https://api.telegram.org/bot${TOKEN_BOT_TELE}/sendMessage -d chat_id=-${CHAT_ID_TELE} -d text='❌ *BUILD FAILED* \n\nProject: ${env.JOB_NAME} \nDate of build: ${date} \nBuild duration: ${currentBuild.durationString} \n\nCHANGES \n"+ getChangeString() + "'"
        }
        success {
            sh "curl -s -X POST https://api.telegram.org/bot${TOKEN_BOT_TELE}/sendMessage -d chat_id=-${CHAT_ID_TELE} -d text='✅ *BUILD SUCCESS* \n\nProject: ${env.JOB_NAME} \nDate of build: ${date} \nBuild duration: ${currentBuild.durationString} \n\nCHANGES \n"+ getChangeString() + "'"
        }
    }
}