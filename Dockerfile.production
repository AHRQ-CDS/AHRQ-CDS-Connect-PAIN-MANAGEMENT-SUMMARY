FROM node:10 as build-deps

WORKDIR /opt/app

COPY . .

RUN yarn

RUN yarn build

FROM httpd:2.4
COPY --from=build-deps /opt/app/build /usr/local/apache2/htdocs/
