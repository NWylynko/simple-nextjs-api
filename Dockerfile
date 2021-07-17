# first stage: build
FROM node:14.17.3-alpine AS builder
WORKDIR /var/www/simple-api
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# second stage: deploy
FROM node:14.17.3-alpine AS deploy
ENV NODE_ENV production
WORKDIR /var/www/simple-api
COPY --from=builder /var/www/simple-api/dist ./dist
COPY package.json yarn.lock ./
RUN yarn install
EXPOSE 4000
CMD yarn start