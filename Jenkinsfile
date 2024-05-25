pipeline {
  agent any
  stages {
    stage('Deploy') {
      steps {
        script {
          sh "pwd && ls -la && docker-compose --profile main up -d --build"
        }

      }
    }

  }
}