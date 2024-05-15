FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=4000
ENV DB_NAME="apple_mart"
ENV DB_PASSWORD="jns7t5fzwh"
ENV DB_HOST="apple-mart-database.c7e2kgk8ktd4.us-east-1.rds.amazonaws.com"
ENV DB_USERNAME=root
ENV DB_DIALECT=mysql
ENV JWT_SECRET="APPLE_MART_SECRET"

EXPOSE 4000

CMD ["node", "server.js", "--host", "0.0.0.0"]