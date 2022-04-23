const mLogger = require('log4js').getLogger('app');
mLogger.level = "all";
const cors = require('cors');
const {serverConfig} = require('./config/serverConfig/config');
const {corsOptions} = require('./config/serverConfig/config');
const express = require('express');
const app = express();
const rout = require('./controller/router');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(rout);
app.get('/', async (req, res)=>{
    res.render('APIBeginner', {
        'signUpPage': `http://${serverConfig.ip}:${serverConfig.port}/signUpPage`,
        'loginPage': `http://${serverConfig.ip}:${serverConfig.port}/loginPage`,
        'forgetPwdPage': `http://${serverConfig.ip}:${serverConfig.port}/forgetPwdPage`
    });
});

/**
 * 1. Build page.
 */
app.use('/scripts/index.js', express.static(__dirname + '\\views'+'\\scripts\\index.js'));
app.get('/loginPage', async (req, res)=>{
    res.render('loginPage.html');
});
app.get('/signUpPage', function (req, res){
    res.render('signupPage.html');
});
app.get('/forgetPwdPage', function (req, res){
    res.render('forgetPwdPage.html');
});

/**
 * 1. Terminal interface notice.
 */
mLogger.info(__dirname + '\\views'+'\\scripts\\index.js');
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/signUpPage`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/loginPage`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/forgetPwdPage`);
app.listen(serverConfig.port);