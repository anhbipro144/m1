pipeline {
    agent any


        stage('Deploy') {
            steps {
                // script {
                //     sh "docker-compose  up -d --build"
                // }
                echo "deploying...."
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
