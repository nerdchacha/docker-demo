FROM mhart/alpine-node:10

WORKDIR /usr/src/app

COPY package*.json index.js ./

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]