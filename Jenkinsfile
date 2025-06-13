pipeline{
    agent any

    environment {
        NODE_ENV = "production"
    }
    tools {
        nodejs "NodeJS 24.2.0"
    }
    stages{
        stage("Clone Repository"){
            steps{
                git "https://github.com/Henry-doc/job-lister-app.git"
            }        
        }

        stage("Install Dependencies"){
            steps{
                sh "npm install"
        }
        }

        stage("Build"){
            steps{
                sh"npm run build"
            }
        }
    }
    post{
        success{
            echo "Deployment succesful"
        }
        failure{
            echo "Pipeli failed"
        }
    }
}