#!/bin/bash

APP_NAME="job-lister-app"
DOCKER_IMAGE="job-lister-app:latest"
DOCKER_CONTAINER="job-lister-app-container"

echo "stoping and removing existing docker container"
docker stop $DOCKER_CONTAINER 2>/dev/null || true
docker rm $DOCKER_CONTAINER 2>/dev/null || true

echo "building docker image"
docker build -t $DOCKER_IMAGE .

echo "running new docker container"
docker run -d \
    --name $DOCKER_CONTAINER \
    -p 3000:3000 \
    -e NODE_ENV=production \
    $DOCKER_IMAGE

echo "Deployment sucessful"
