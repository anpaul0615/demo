FROM node:8

RUN mkdir -p /hapi-auth-api
WORKDIR /hapi-auth-api

COPY ./package.json /hapi-auth-api/
COPY . /hapi-auth-api/
RUN  npm install --production

EXPOSE 5000
ENV NODE_ENV production
CMD [ "npm", "run", "prod" ]
