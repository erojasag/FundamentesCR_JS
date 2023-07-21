const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const userRouter = require('./routes/usersRoute');
const pacientesRouter = require('./routes/pacientesRoute');
const expedientesRouter = require('./routes/expedientesRoute');
const datosMedicosRouter = require('./routes/datosMedicosRoute');
const casasRouter = require('./routes/casasRoute');
const rolRouter = require('./routes/rolRoute');
const aspectoClinicoRouter = require('./routes/aspectoClinicoRoute');
const aspectoComunitarioRouter = require('./routes/aspectoComunitarioRoute');
const aspectoDesarrolloTallerRouter = require('./routes/aspectoDesarrolloTallerRoute');
const aspectoPsicoEducativoRouter = require('./routes/aspectoPsicoEducativoRoute');
const perfilesEntradaRouter = require('./routes/perfilEntradaRoute');
const perfilesSalidaRouter = require('./routes/perfilSalidaRoute');
const condicionesLaboralesRouter = require('./routes/condicionLaboralRoute');
const encargadoRouter = require('./routes/encargadoRoute');
const escolaridadRouter = require('./routes/escolaridadRoute');
const dinamicaFamiliarRouter = require('./routes/dinamicaFamiliarRoute');
const socioDemograficoRouter = require('./routes/sociodemograficoRoute');
const statsRouter = require('./routes/statsRoute');
const encuestaSatisfaccionRouter = require('./routes/encuestasRoute');

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

// limit requests from same IP
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
app.use('/pacientes', pacientesRouter);
app.use('/expedientes', expedientesRouter);
app.use('/datosMedicos', datosMedicosRouter);
app.use('/casas', casasRouter);
app.use('/roles', rolRouter);
app.use('/aspectosClinicos', aspectoClinicoRouter);
app.use('/aspectosComunitarios', aspectoComunitarioRouter);
app.use('/aspectosDesarrolloTaller', aspectoDesarrolloTallerRouter);
app.use('/aspectosPsicoEducativos', aspectoPsicoEducativoRouter);
app.use('/entrevistasEntrada', perfilesEntradaRouter);
app.use('/entrevistasSalida', perfilesSalidaRouter);
app.use('/condicionesLaborales', condicionesLaboralesRouter);
app.use('/encargados', encargadoRouter);
app.use('/escolaridades', escolaridadRouter);
app.use('/dinamicasFamiliares', dinamicaFamiliarRouter);
app.use('/socioDemograficos', socioDemograficoRouter);
app.use('/stats', statsRouter);
app.use('/encuestasSatisfaccion', encuestaSatisfaccionRouter);
//404 handler
app.all('*', (req, res, next) => {
  next(
    new AppError(`This is the staging ${req.originalUrl} on this server!`, 404)
  );
});

app.use(ErrorHandler);

module.exports = app;
