var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var recipeRouter = require('./routes/recipes');
var usersRouter = require('./routes/users');

var app = express();

var basePath = '/RecipeBook/api/v1';

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(`${basePath}/`, indexRouter);
app.use(`${basePath}/users`, usersRouter);
app.use(`${basePath}/recipes`, recipeRouter);

module.exports = app;
