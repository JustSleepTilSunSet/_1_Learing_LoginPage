const mLogger = require('log4js').getLogger('sequelize');
mLogger.level = "all";
let mySQLConfig = require('../../config/mysqlConfig/config');
const { Sequelize } = require('sequelize');

//Sequelize set mysql.
const sequelize = new Sequelize(mySQLConfig.database, mySQLConfig.user, mySQLConfig.password, {
  host: mySQLConfig.host,
  dialect: 'mysql'
});

//Test connect database.
sequelize
.authenticate()
.then(() => {
  mLogger.info(`[SQL cmd] Connection has been established successfully.`);
})
.catch((err) => {
  mLogger.error(`[SQL cmd] Connect mysql database fail, and look error report:${err.stack}`);
});

exports.sequelize = sequelize;