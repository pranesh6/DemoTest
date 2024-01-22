# Use an official node runtime as a parent image
FROM node:21.6-alpine
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app


# Install dependencies
COPY package.json /app

RUN npm install --silent

# Add rest of the client code
COPY . /app

EXPOSE 3000

CMD npm start