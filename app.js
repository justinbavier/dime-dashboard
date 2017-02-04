const express = require('express');
const ParseDashboard = require('parse-dashboard');

const config = {
    apps: [
        {
            "serverURL": process.env.serverURL || 'http://localhost:5000/parse',
            "appId": "00100100",
            "masterKey": "55ba92cc-f659-4a2b-adb4-ae2168447a28",
            "appName": "Dime Dashboard",
            "production": true
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
