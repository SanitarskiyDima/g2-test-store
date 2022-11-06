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
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npm run allure:clear'
                    sh 'npm run cy:run'
                    sh 'which allure'
                    sh 'npm run ci-allure:report'
                }
            }
        }
    }
}