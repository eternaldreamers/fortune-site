FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
COPY ./public ./public
COPY ./src ./src
COPY ./webpack ./webpack

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

EXPOSE 4000

CMD yarn start;