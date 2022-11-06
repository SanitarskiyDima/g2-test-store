pipeline {
    agent any

   tools {nodejs "NodeJS 19.0.1"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Cypress') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    sh 'npm run allure:clear'
                    sh 'npm run cy:run'
                }
            }
        }
        stage('Report') {
            steps {
                    sh 'npm run allure:report'
            }
        }
    }
}