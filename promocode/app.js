var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const promocodeRouter = require('./routes/promocode');

var app = express();

const db = require('./models/db');
db.sequelize.sync({force: false}).then(() => {

});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/promocode', promocodeRouter);

module.exports = app;
