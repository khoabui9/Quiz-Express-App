'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var app = express();

require('./database');
require('./seed');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

var routes = require('./routes');
/*var questionsRoutes = require('./routes/questions');*/


app.use(routes, function() {});
/*app.use('/questions',questionsRoutes);*/

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});