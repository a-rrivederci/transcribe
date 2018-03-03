/**
* setup
*
* @author  Siyuan Gao <siyuangao@gmail.com>
* @license MIT
*/

/* eslint no-process-env: 0 */

import ReadableId           from 'funky-sloth-42';
import Express              from 'express';
import Bunyan               from 'bunyan';
import bunyantcp            from 'bunyan-logstash-tcp';
import expressValidator     from 'express-validator';
import bodyParser           from 'body-parser';

import AppSingleton         from './appsingleton';
import createLogger         from './log/createLogger';

function config() {
    const sharedInstance = AppSingleton.getInstance();

    sharedInstance.serviceName = process.env.SERVICE_NAME || 'elica-weather';
    sharedInstance.serverId = ReadableId();

    sharedInstance.bunyan = Bunyan.createLogger({
        name: sharedInstance.serviceName,
        serializers: Bunyan.stdSerializers,
        streams: [
            {
                stream: process.stdout,
                level: process.env.STDOUT_LEVEL || 'debug'
            },
            // {
            //     level: 'debug',
            //     type: 'raw',
            //     stream: bunyantcp.createStream({
            //         host: process.env.LOGSTASH_HOST || '127.0.0.1',
            //         port: process.env.LOGSTASH_PORT || 5000
            //     })
            // }
        ],
        index: `${sharedInstance.serviceName}-${sharedInstance.serverId}`
    });

    sharedInstance.log = createLogger(sharedInstance.bunyan);


    // Creating a server instance

    sharedInstance.server = Express();
    sharedInstance.httpServer = require('http').Server(sharedInstance.server);
    sharedInstance.io = require('socket.io')(sharedInstance.httpServer);
    sharedInstance.server.use(bodyParser.json());
    sharedInstance.server.use(expressValidator());
}

export default { config };