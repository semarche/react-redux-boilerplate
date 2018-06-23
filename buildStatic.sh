#!/bin/sh

echo Remove 'dist' folder if it exist
rm -rf ./dist

echo Building image with a static files
docker build -f ./Dockerfile.build --no-cache -t ui-static .

echo Run container and copy static files to 'dist' folder
docker run --name ui-static-container ui-static /bin/true
docker cp ui-static-container:/frontend/dist .
docker rm ui-static-container
docker rmi ui-static
docker rmi node:8
