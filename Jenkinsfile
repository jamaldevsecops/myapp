pipeline {
    agent {
        label 'BUILD-SERVER'
    }

    environment {
        CONTAINER_NAME        = "myapp"
        IMAGE_TAG             = "v1.2"  // ✅ You can now change this
        DOCKER_FILENAME       = "Dockerfile"
        DOCKER_HUB_USERNAME   = "jamaldevsecops"
        DOCKER_CREDENTIALS_ID = "my-dockerhub-registry"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Set Image Name') {
            steps {
                script {
                    env.DOCKER_IMAGE = "${env.DOCKER_HUB_USERNAME}/${env.CONTAINER_NAME}:${env.IMAGE_TAG}"
                    echo "🔖 Using image tag: ${env.DOCKER_IMAGE}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh "docker build -t ${env.DOCKER_IMAGE} -f ${env.DOCKER_FILENAME} ."
                        echo "✅ Docker image built: ${env.DOCKER_IMAGE}"
                    } catch (Exception e) {
                        error "❌ Docker build failed: ${env.DOCKER_IMAGE}. Error: ${e.message}"
                    }
                }
            }
        }

        stage('Push Docker Image') {
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
                        echo "📦 Image pushed: ${env.DOCKER_IMAGE}"
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
