# Build Process

FROM node:8.11.3 as build
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . /app

RUN yarn run build

CMD [ "npm", "start" ]

# Production Image

FROM node:8.11.3-alpine

COPY --from=build /app/main.css /app/main.bundle.js /app/index.html /app
