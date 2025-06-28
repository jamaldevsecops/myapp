pipeline {
    agent {
        label 'BUILD-SERVER'
    }
    
    environment {
        CONTAINER_NAME = "myapp"
        IMAGE_TAG = "v1.2"
        DOCKER_FILENAME = "Dockerfile"
        
        DOCKER_HUB_USERNAME = "jamaldevsecops"
        DOCKER_IMAGE = "${env.DOCKER_HUB_USERNAME}/${env.CONTAINER_NAME}:${env.IMAGE_TAG}"
        
        // Jenkins DockerHub Credentials
        DOCKER_CREDENTIALS_ID = 'my-dockerhub-registry' 
        
        // Email addresses for notifications
        RECIPIENT_EMAILS = "jamal.devsecops@gmail.com"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh "docker build -t ${env.DOCKER_IMAGE} -f ${DOCKER_FILENAME} ."
                        echo "Docker image built successfully: ${env.DOCKER_IMAGE}"
                    } catch (Exception e) {
                        error "Failed to build Docker image: ${env.DOCKER_IMAGE}. Error: ${e.message}"
                    }
                }
            }
        }

        stage('Docker Login and Push, and Logout') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                            echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        '''
                        sh "docker push ${env.DOCKER_IMAGE}"
                        echo "Docker image pushed to DockerHub: ${env.DOCKER_IMAGE}"
                        sh "docker logout"
                        echo "Logged out from DockerHub"
                    }
                }
            }
        }
    }
    
    post {
        success {
            script {
                // Send success email notification
                emailext (
                    subject: "Build Reports (Successful Build): For ${env.CONTAINER_NAME}",
                    body: "The Docker image named ${env.CONTAINER_NAME} has been successfully built and pushed to DockerHub.",
                    to: "${env.RECIPIENT_EMAILS}",
                    attachLog: true
                )
            }
        }
        
        failure {
            script {
                // Send failure email notification
                emailext (
                    subject: "Build Reports (Failed Build): For ${env.CONTAINER_NAME}",
                    body: "The build has failed for ${env.CONTAINER_NAME}. Please check the Jenkins logs for details.",
                    to: "${env.RECIPIENT_EMAILS}",
                    attachLog: true
                )
            }
        }
    }
}
