const express = require('express');

const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/usersRoute');
const expedienteRouter = require('./routes/expedientesRoute');
const ErrorHandler = require('./controllers/errorController');
// create and setup express app
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register routes

app.use('/users', userRouter);
app.use('/expedientes', expedienteRouter);

app.use(ErrorHandler);

module.exports = app;
