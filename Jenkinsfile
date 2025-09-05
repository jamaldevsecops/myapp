pipeline {
    agent {
        label 'BUILD-SERVER'
    }

    environment {
        CONTAINER_NAME        = "myapp"
        IMAGE_TAG             = "latest"
        DOCKER_FILENAME       = "Dockerfile"
        DOCKER_HUB_USERNAME   = "jamaldevsecops"
        DOCKER_CREDENTIALS_ID = "PersonalDockerHubAccessToken"
        RECIPIENT_EMAILS      = "jamal.devsecops@gmail.com"
    }

    stages {
        stage('📥 Checkout') {
            steps {
                echo "📥 Checking out source code..."
                checkout scm
            }
        }

        stage('🔧 Build Docker Image') {
            steps {
                script {
                    try {
                        echo "🔧 Starting Docker build for: ${env.CONTAINER_NAME}:${env.IMAGE_TAG}"
                        def image = "${env.DOCKER_HUB_USERNAME}/${env.CONTAINER_NAME}:${env.IMAGE_TAG}"
                        sh "docker build --no-cache -t ${image} -f ${DOCKER_FILENAME} ."
                        echo "✅ Docker image built successfully: ${image}"
                        env.DOCKER_IMAGE = image
                    } catch (Exception e) {
                        error "❌ Failed to build Docker image: ${env.CONTAINER_NAME}:${env.IMAGE_TAG}. Error: ${e.message}"
                    }
                }
            }
        }

        stage('📤 Push Docker Image') {
            steps {
                script {
                    echo "📤 Logging in to DockerHub and pushing image..."
                    withCredentials([
                        usernamePassword(
                            credentialsId: env.DOCKER_CREDENTIALS_ID,
                            usernameVariable: 'DOCKER_USERNAME',
                            passwordVariable: 'DOCKER_PASSWORD'
                        )
                    ]) {
                        sh '''
                            echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        '''
                        sh "docker push ${env.DOCKER_IMAGE}"
                        echo "✅ Docker image pushed to DockerHub: ${env.DOCKER_IMAGE}"
                        sh "docker logout"
                        echo "🚪 Logged out from DockerHub"
                    }
                }
            }
        }
    }

    post {
        success {
            script {
                emailext(
                    subject: "✅ [SUCCESS] Build Report: ${env.CONTAINER_NAME} 🚀",
                    body: """
                        <p><strong>Build Status:</strong> SUCCESS</p>
                        <p><strong>Image:</strong> ${env.DOCKER_IMAGE}</p>
                        <p>The Docker image has been successfully built and pushed to DockerHub.</p>
                    """,
                    mimeType: 'text/html',
                    to: "${env.RECIPIENT_EMAILS}",
                    attachLog: true
                )
            }
        }

        failure {
            script {
                emailext(
                    subject: "❌ [FAILURE] Build Report: ${env.CONTAINER_NAME} 💥",
                    body: """
                        <p><strong>Build Status:</strong> FAILED</p>
                        <p><strong>Image:</strong> ${env.CONTAINER_NAME}:${env.IMAGE_TAG}</p>
                        <p>The Docker image build or push has failed. Please review the Jenkins logs.</p>
                    """,
                    mimeType: 'text/html',
                    to: "${env.RECIPIENT_EMAILS}",
                    attachLog: true
                )
            }
        }
    }
}
