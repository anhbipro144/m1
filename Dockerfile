FROM jenkins/jenkins
    USER root
    RUN apt update && apt install -y docker.io 
    RUN curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose  && chmod +x /usr/local/bin/docker-compose