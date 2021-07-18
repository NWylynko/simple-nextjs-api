FROM node:14.17.3-alpine
WORKDIR /var/www/simple-api
COPY . .
RUN yarn install
RUN yarn prisma generate
RUN yarn build
EXPOSE 4000
ENV NODE_ENV production
CMD yarn start