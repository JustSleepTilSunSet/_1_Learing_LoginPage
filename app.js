const mLogger = require('log4js').getLogger('app');
mLogger.level = "all";
const cors = require('cors');
const {serverConfig} = require('./config/serverConfig/config');
const {corsOptions} = require('./config/serverConfig/config');
const express = require('express')
const app = express();
const rout = require('./controller/router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(rout);
app.get('/', async (req, res)=>{
    res.send('Hello World');
});
app.get('/dbTesting', async (req, res)=>{
    res.send('Hello World');
});
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/testing`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/login`);
app.listen(serverConfig.port);