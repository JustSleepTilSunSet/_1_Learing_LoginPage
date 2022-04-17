let mLogger = require('log4js').getLogger('/login');
mLogger.level = "all";
let _ = require('lodash');
let User = require('../../model/apiModels/User');
async function login(req,res){
    try{
        let loginPayload = req.body;
        let userInstance = new User(loginPayload);
        let result = await userInstance.getUserInfoByMail();
        if(_.isNull(result)){
            throw new Error(`The account is invalid.`);
        }
        return res.json({
            res: `Login successfully`
        });
    }catch(error){
        mLogger.error(`[login] Login error ${error.stack}`);
        return res.json(error.message);
    }
}
module.exports = login;