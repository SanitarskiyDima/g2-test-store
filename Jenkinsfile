pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test 1') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }
}