FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i

EXPOSE 3000

ENTRYPOINT node ./index.js
