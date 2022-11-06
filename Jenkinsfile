pipeline {
    agent any

   tools {nodejs "NodeJS 19.0.1"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run allure:clear'
                sh 'npm run cy:run'
                sh 'npm run allure:report'
            }
        }
        stage('Report') {
            steps {
                sh 'npm run allure:report'
            }
        }
    }
}