const express = require('express');
const ParseDashboard = require('parse-dashboard');

const config = {
    apps: [
        {
            "serverURL": "https://obscure-gorge-33669.herokuapp.com/parse",
            "appId": "ATlQvhxRMC41YMx3XRhuQRuN2A9RnFR9BFC2EMyn",
            "masterKey": "qDSRVrmOq5OrrbdpRcMqLRL0xun1ObKL4d5WTtS8",
            "appName": "ClassNav (Deprecated)"
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
