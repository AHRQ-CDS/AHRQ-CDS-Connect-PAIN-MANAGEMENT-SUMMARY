FROM node as builder

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
USER node
RUN yarn add core-js
RUN yarn install

COPY --chown=node:node . .
RUN yarn build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/build/ /usr/share/nginx/html