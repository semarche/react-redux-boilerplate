MAINTAINER Marchenko Sergey <sergey.dnepro@gmail.com>

FROM node:8-alpine
EXPOSE 8888

ENV TERM='xterm-256color'
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /front
WORKDIR /front

COPY package*.json /front/
RUN npm install --no-optional  --silent

ADD ./ /front
RUN npm run build

CMD ["npm", "start"]
