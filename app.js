const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'pubic')));
app.use(session ({
    store: new FileStore(),
    secret: 'get rad',
    resave: false,
    saveUninitialized: true,
    is_logged_in: false
})
);

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');



module.exports = app;
