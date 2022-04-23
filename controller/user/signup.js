let mLogger = require('log4js').getLogger('/signup');
mLogger.level = "all";
const Users = require('../../model/apiModels/User');

async function signup(req,res){
    try{
        let signupPayload = req.body;
        let userInstance = new Users(signupPayload);
        await userInstance.createUser();
        return res.json({
            res: `Signup successfully`
        });
    }catch(error){
        mLogger.error(`[signup] signup error ${error.stack}`);
        return res.json(error.message);
    }
}
module.exports = signup;