const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const userRouter = require('./routes/usersRoute');
const expedienteRouter = require('./routes/expedientesRoute');
const ErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

// create and setup express app
const app = express();
app.use(express.json());

//MIDDLEWARES
//set security HTTP headers
app.use(helmet());

//development logging
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

//limit requests from same IP
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000, //1 hour
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/', limiter);

//enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your actual domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(cors());

//data sanitization against XSS
app.use(xss());

//prevent parameter pollution
app.use(
  hpp({
    whitelist: ['Nombre', 'Apellido1', 'Apellido2', 'Cedula', 'Correo'],
  })
);

//body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

// register routes
app.use('/users', userRouter);
app.use('/expedientes', expedienteRouter);

//404 handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(ErrorHandler);

module.exports = app;
