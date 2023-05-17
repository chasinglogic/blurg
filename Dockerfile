FROM node:lts

RUN mkdir /app
WORKDIR /app
COPY server.js .

CMD ["node", "/app/server.js"]
