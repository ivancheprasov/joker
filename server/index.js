'use strict';
const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const deepai = require('deepai');
const deepaiKey = require('./config/local-config').deepaiKey;

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
deepai.setApiKey(deepaiKey);

app
    .set('port', PORT)
    .use(cors({credentials: true, origin: "http://localhost:8000"}))
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