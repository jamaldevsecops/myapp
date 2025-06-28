pipeline {
    agent {
        label 'BUILD-SERVER'
    }

    environment {
        CONTAINER_NAME        = "myapp"
        IMAGE_TAG             = "v1.1"
        DOCKER_FILENAME       = "Dockerfile"
        DOCKER_HUB_USERNAME   = "jamaldevsecops"
        DOCKER_IMAGE          = "${DOCKER_HUB_USERNAME}/${CONTAINER_NAME}:${IMAGE_TAG}"
        DOCKER_CREDENTIALS_ID = "my-dockerhub-registry"
        DOCKERFILE_DIR        = "."  // Set to current directory
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
                        sh "docker build -t ${env.DOCKER_IMAGE} -f ${env.DOCKER_FILENAME} ${env.DOCKERFILE_DIR}"
                        echo "✅ Docker image built successfully: ${env.DOCKER_IMAGE}"
                    } catch (Exception e) {
                        error "❌ Failed to build Docker image: ${env.DOCKER_IMAGE}. Error: ${e.message}"
                    }
                }
            }
        }

        stage('Docker Login and Push') {
            steps {
                script {
                    withCredentials([
                        usernamePassword(
                            credentialsId: env.DOCKER_CREDENTIALS_ID,
                            usernameVariable: 'DOCKER_USERNAME',
                            passwordVariable: 'DOCKER_PASSWORD'
                        )
                    ]) {
                        sh """
                            echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin
                            docker push ${env.DOCKER_IMAGE}
                            docker logout
                        """
                        echo "✅ Docker image pushed and logged out from DockerHub."
                    }
                }
            }
        }
    }

    post {
        success {
            echo "🎉 Build and push succeeded for image: ${env.DOCKER_IMAGE}"
        }
        failure {
            echo "🚨 Build or push failed for image: ${env.DOCKER_IMAGE}"
        }
    }
}
