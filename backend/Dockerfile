############################################################
# Dockerfile to run elica-bot
# Based on node
############################################################

FROM node:boron

# File Author / Maintainer
MAINTAINER Siyuan Gao <siyuangao@gmail.com>

# Bundle app source
COPY . /src

WORKDIR /src

# Install app dependencies
RUN cd /src; npm install --silent

ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

RUN npm run build

CMD node build/production.js
