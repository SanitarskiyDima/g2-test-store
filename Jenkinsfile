pipeline {
    agent any

   tools {nodejs "Node12"}

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