require('dotenv').config();
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development'];
const knex = Knex(knexConfig);
Model.knex(knex);


const express = require('express');
const multer  = require('multer');
const http = require('http');
const bodyParser = require('body-parser');
const AppRoutes = require('./routes/routes');
const app = express();
const port = process.env.PORT || 9000

app.use(bodyParser.json());

new AppRoutes(app, multer({ dest: '/tmp/routes/' })).routes();

http.createServer(app).listen(port, () => console.log(`Server listening on port ${port}`));
