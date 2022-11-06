pipeline {
    agent any

   tools {nodejs "NodeJS"}

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
                    sh 'ls'
                    sh 'pwd'
                    publishHTML([
                        allowMissing: false, 
                        alwaysLinkToLastBuild: false, 
                        keepAll: false, 
                        reportDir: 'allure-report', 
                        reportFiles: 'index.html', 
                        reportName: 'Allure report', 
                        reportTitles: '', 
                        useWrapperFileDirectly: true
                        ])
            }
        }
    }
}