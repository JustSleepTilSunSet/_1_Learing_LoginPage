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
        'loginPage': `http://${serverConfig.ip}:${serverConfig.port}/loginPage`
    });
    // res.send(`<a herf ="http://127.0.0.1:17200/signUpPage"`);
});
app.use('/scripts/index.js', express.static(__dirname + '\\views'+'\\scripts\\index.js'));
app.get('/loginPage', async (req, res)=>{
    res.render('loginPage.html');
});

app.get('/signUpPage', function (req, res){
    res.render('signupPage.html');
});
mLogger.info(__dirname + '\\views'+'\\scripts\\index.js');
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/signUpPage`);
mLogger.info(`http://${serverConfig.ip}:${serverConfig.port}/loginPage`);
app.listen(serverConfig.port);