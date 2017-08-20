const express = require('express');
const ParseDashboard = require('parse-dashboard');
require('dotenv').config();


const config = {
    apps: [
        {
            "serverURL": process.env.SERVER_URL,
            "appId": process.env.APP_ID,
            "masterKey": process.env.MASTER_KEY,
            "appName": "Dime Dashboard",
            "production": process.env.PRODUCTION
        }
    ],
    users: [{
        user: "dime-admin",
        pass: "password"
    }],
    allowInsecureHttp: true
};

const dashboard = ParseDashboard(config, config.allowInsecureHttp);

const app = express();


app.use('/', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(process.env.PORT  || 4040);
