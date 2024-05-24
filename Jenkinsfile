pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                 script {
                    sh "docker-compose -f ${env.COMPOSE_FILE} up -d"
                }
            }
        }
    }
}