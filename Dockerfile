FROM node:lts-alpine

RUN apk upgrade

RUN mkdir /app
WORKDIR /app
COPY server.js .

CMD ["node", "/app/server.js"]
