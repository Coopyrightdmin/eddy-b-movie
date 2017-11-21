FROM node:9.2.0-alpine

ADD . /app  
WORKDIR /app 

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]
