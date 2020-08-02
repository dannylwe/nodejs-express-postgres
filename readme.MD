[![Build Status](https://travis-ci.com/dannylwe/nodejs-express-postgres.svg?token=uFr3V6xNUs2otJzBXJqp&branch=master)](https://travis-ci.com/dannylwe/nodejs-express-postgres)

## Getting started  
- npm init -y  
- npm install --save express body-parser  


## Install babel to convert to ES6  
- npm install --save-dev @babel/core @babel/cli @babel/node @babel/plugin-transform-runtime @babel/preset-env @babel/register @babel/runtime babel-loader  

## install eslint  
- npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import  

## Install nodemon  
- npm install -g nodemon  

## Install sequelize  
- npm install -g sequelize-cli  
- touch .sequelizerc  
- npm install --save path  
- npm install --save sequelize pg pg-hstore  
- sequelize init  

## Install postgres
- docker pull postgres  
- docker run --name new-postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres  

## Go to postgres container
- docker exec -it new-postgresdb psql -U postgres  
- show users: \du  
- show databases: \l  
- create database: CREATE DATABASE books;  
- create user with no password: CREATE USER danny;  

## create sequelize migration and model
- sequelize model:generate --name Book --attributes title:string,price:string,description:string  

## Test Coverage  
- npm install --save-dev mocha chai chai-http nyc
- mocha for testing, chai for assertion and nyc for coverage




## Ref here:
- https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014  
- https://coralogix.com/log-analytics-blog/morgan-npm-logger-the-complete-guide/  
- https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b  
- https://medium.com/@Ayra_Lux/a-guide-to-orm-sequelize-c276c7b6dd18  
- https://hub.docker.com/_/postgres?tab=description  
- https://www.twilio.com/blog/guide-node-js-logging  
