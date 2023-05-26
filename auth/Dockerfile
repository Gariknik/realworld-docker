FROM node:20.2.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
