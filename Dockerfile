FROM node:24-alpine

WORKDIR /src

COPY package*.json ./

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]