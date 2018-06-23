#!/bin/sh

echo Remove videos and screenshots from previous e2e tests if it exist
rm -rf ./cypress/videos/*
rm -rf ./cypress/screenshots/*

echo Building image with a static files
docker build -f ./Dockerfile.test --no-cache -t ui-test .

echo Run container and e2e tests
docker run --name ui-test-container ui-test bash -c "npm run test:cypress:dev"

echo copying e2e-testing video from container to 'cypress/videos'
docker cp ui-test-container:/frontend/cypress/videos ./cypress
echo copying e2e-testing screenshots from container to 'cypress/screenshots'
docker cp ui-test-container:/frontend/cypress/screenshots ./cypress

docker rm ui-test-container
docker rmi ui-test
#docker rmi cypress/base
