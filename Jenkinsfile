pipeline {
  agent any
  stages {
    stage('Deploy') {
      steps {
        script {
          sh "pwd && ls -la && docker-compose up -d --build"
        }

      }
    }

  }
}