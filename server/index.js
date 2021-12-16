'use strict';
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalConfig = require('./config/global');
const serveStatic = require('serve-static');
const path = require("path");
require('dotenv').config();
const APP_ROOT = path.resolve(__dirname, '..');
const PORT = process.env.PORT || globalConfig.server.defaultPort;
const app = express();
const deepai = require('deepai');
const deepaiKey = process.env.DEEPAI_KEY;

deepai.setApiKey(deepaiKey);

app
    .set('APP_ROOT', APP_ROOT)
    .set('port', PORT)
    .use(cors({credentials: true, origin: "http://localhost:8000"}))
    .use(serveStatic(globalConfig.server.staticFolder))
    .use(serveStatic(globalConfig.server.staticFolder))
    .use(serveStatic(globalConfig.server.staticFolder))
    .use(serveStatic(globalConfig.server.staticFolder))
    .use(cookieParser())
    .use(bodyParser.json())
    .use(require('./routes')(app))
    .listen(app.get('port'), function () {
        console.log(`App is running on port ${PORT}`);
    });