FROM node:latest
WORKDIR /glossary
COPY . .
RUN npm install
RUN npm install express-handlebars
RUN npm install express
RUN npm install mongoose
RUN npm install body-parser
RUN npm ci
EXPOSE 2000
CMD ["node", "index.js"]