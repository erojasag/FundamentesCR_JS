const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const userRouter = require('./routes/usersRoute');
const expedienteRouter = require('./routes/recordsRoute');
const admissionInterviewsRouter = require('./routes/admissionInterviewRoute');
const houseRouter = require('./routes/houseRoute');
const ActionLogRouter = require('./routes/ActionLogRoute');
const coexistenceRouter = require('./routes/coexistenceRoute');
const exitInterviewRouter = require('./routes/exitInterviewRoute');
const personDataRouter = require('./routes/personDataRoute');
const genderRouter = require('./routes/genderRoute');
const personInChargeRouter = require('./routes/personInChargeRoute');
const psicosocialFactorRouter = require('./routes/psicosocialFactorRoute');
const recordRouter = require('./routes/recordRoute');
const recordStatusRouter = require('./routes/recordStatusRoute');
const relationshipRouter = require('./routes/relationshipRoute');
const riskCalificationsRouter = require('./routes/riskCalificationsRoute');
const socioEconomicsDataRouter = require('./routes/socioEconomicsDataRoute');
const statusRouter = require('./routes/statusRoute');

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
app.use(cors());

//data sanitization against XSS
app.use(xss());

//prevent parameter pollution
app.use(hpp());

//body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

// register routes
app.use('/usuarios', userRouter);
app.use('/expedientes', expedienteRouter);
app.use('/entrevistasEntrada', admissionInterviewsRouter);
app.use('/entrevistasSalida', exitInterviewRouter);
app.use('/coexistencia', coexistenceRouter);
app.use('/logAcciones', ActionLogRouter);
app.use('/generos', genderRouter);
app.use('/datosPersona', personDataRouter);
app.use('/casas', houseRouter);
app.use('/personaResponsable', personInChargeRouter);
app.use('/factorPsicosocial', psicosocialFactorRouter);
app.use('/registro', recordRouter);
app.use('/registroEstatus', recordStatusRouter);
app.use('/relacion', relationshipRouter);
app.use('/calificacion', riskCalificationsRouter);
app.use('/datosSocioEconomicos', socioEconomicsDataRouter);
app.use('/estatus', statusRouter);

//404 handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(ErrorHandler);

module.exports = app;
