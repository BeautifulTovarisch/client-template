# Build Process

FROM node:8.11.1 as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . /app
CMD [ "npm", "start" ]

# Production Image

FROM node:8.11.1-alpine
WORKDIR /app
COPY --from=build /app /app
RUN yarn install --production
RUN yarn run build
USER node
CMD [ "node", "server.js" ]
