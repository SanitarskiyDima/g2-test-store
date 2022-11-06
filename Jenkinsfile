pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            Parallel{
                stage('Test 1') {
                    steps {
                        sh 'npm run cy:run'
                    }
                }
                
                stage('Test 2') {
                    steps {
                        sh 'npm run cy:run'
                    }
                }

        }
    }
    }
}