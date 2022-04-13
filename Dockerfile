FROM node:14

WORKDIR /var/www/backend

COPY . .

RUN npm install && npm install --legacy-peer-deps

EXPOSE 3000

CMD [ "sh", "-c", "npm install --quiet && npm run start:dev" ]