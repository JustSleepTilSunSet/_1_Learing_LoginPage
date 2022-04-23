let mLogger = require('log4js').getLogger('/signup');
mLogger.level = "all";
const Users = require('../../model/apiModels/User');

async function signup(req,res){
    try{
        let signupPayload = req.body;
        mLogger.debug(`signupPayload ${JSON.stringify(signupPayload,null,2)}`);
        let userInstance = new Users(signupPayload);
        await userInstance.createUser();
        return res.json({
            res: `Login successfully`
        });
    }catch(error){
        mLogger.error(`[signup] signup error ${error.stack}`);
        return res.json(error.message);
    }
}
module.exports = signup;