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






## Ref here:
- https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014  