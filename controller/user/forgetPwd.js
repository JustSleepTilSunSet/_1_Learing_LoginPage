let mLogger = require('log4js').getLogger('/forgetPwd');
mLogger.level = "all";
const Users = require('../../model/apiModels/User');

async function forgetPwd(req,res){
    try{
        let forgetPwdPayload = req.body;
        let userInstance = new Users(forgetPwdPayload);
        let updateResult = await userInstance.updatePassword();
        mLogger.info(`[forgetPwd] account ${forgetPwdPayload.account} update  password to ${forgetPwdPayload.pwd}.`);
        mLogger.info(`[forgetPwd] Update result ${JSON.stringify(updateResult)}.`);
        return res.json({
            res: `Update successfully`
        });
    }catch(error){
        mLogger.error(`[forgetPwd] forgetPwd error ${error.stack}`);
        return res.json(error.message);
    }
}
module.exports = forgetPwd;