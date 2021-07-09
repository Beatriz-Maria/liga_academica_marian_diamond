'use strict';

const createError = require('http-errors');
const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public')));

// Aqui ficarão todas as rotas do APP
app.use('/', require('./routes/index'));
app.use('/quem-somos', require('./routes/navbar'));
//app.use('/como-participar', require('./routes/navbar'))
//app.use('/nossos-projetos', require('./routes/navbar'))
//app.use('/nossos-ligantes', require('./routes/navbar'))
//app.use('/olimpiada', require('./routes/navbar'))
//app.use('/neurosciencia-no-brasil', require('./routes/navbar'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Host port 3000
app.listen(3000,function(){
    console.log("server is running on port 3000");
 });

 
module.exports = app;