pipeline {
    agent any

   tools {nodejs "NodeJS 18.12.0"}

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