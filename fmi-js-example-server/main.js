'use strict';

const env = require('./config');
const Hapi = require('hapi');
const fmi = require('fmi-js');

const config = {};
const server = new Hapi.Server(config);

const port = 9000;
const host = '0.0.0.0';
server.connection({ port: port, host: host, routes: { cors: true } });

server.route({
    method: 'GET',
    path: '/forecast/{location}',
    config: {
        handler: (request, reply) => {
            console.log("weather for", request.params.location);
            fmi.simpleForecast(request.params.location)
                .then(forecast => {
                    reply(JSON.stringify(forecast, null, 2));
                });
        }
    }
});


server.route({
    method: 'GET',
    path: '/observation/{location}',
    config: {
        handler: (request, reply) => {
            console.log("weather for", request.params.location);
            fmi.latestObservations(request.params.location)
                .then(forecast => {
                    reply(JSON.stringify(forecast, null, 2));
                });
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

module.exports = server;
