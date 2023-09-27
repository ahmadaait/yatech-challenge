FROM node:14.18.1-alpine
WORKDIR /var/www
COPY . .
RUN npm i 
RUN npm run build && cp -rf src/views dist
EXPOSE 5000
CMD [ "npm", "run", "serve:docker"]