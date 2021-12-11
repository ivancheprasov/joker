'use strict';
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalConfig = require('./config/global');
const serveStatic = require('serve-static');
require('dotenv').config();
const PORT = process.env.PORT || globalConfig.server.defaultPort;
const app = express();
const deepai = require('deepai');
const deepaiKey = process.env.DEEPAI_KEY;

deepai.setApiKey(deepaiKey);

app
    .set('port', PORT)
    .use(cors({credentials: true, origin: "http://localhost:8000"}))
    .use(serveStatic(globalConfig.server.staticFolder))
    .use(cookieParser())
    .use(bodyParser.json())
    .use(function (req, res, next) {
        res.header("Content-Type", "application/json; charset=utf-8");
        next();
    })
    .use(require('./routes')(app))
    .listen(app.get('port'), function () {
        console.log(`App is running on port ${PORT}`);
    });