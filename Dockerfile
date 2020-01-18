FROM node:10

WORKDIR /opt/app

COPY . .

RUN yarn --modules-folder=/opt/node_modules


# yarn ignores its own config (--modules-folder); symlink node_modules where it expects
# https://github.com/yarnpkg/yarn/issues/3900
CMD ln -fs /opt/node_modules && yarn start
