FROM node:10.10-alpine
COPY . /mern-pdf-store-server
WORKDIR /mern-pdf-store-server
RUN npm install
ENTRYPOINT node app.js
