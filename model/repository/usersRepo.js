let mLogger = require('log4js').getLogger('./usersRepo');
mLogger.level = "all";
let _ = require('lodash');
let mDBusers = require('../database/models/users').usersModel();
let PRIMARY_KEYS = mDBusers['primaryKeys'];
let TABLE_ATTRIBUTES = Object.keys(mDBusers['tableAttributes']);
let Exception = require('../../common/Error');
let {FN_FAIL_STATUS} = require('../constants');
/**
 * 1. Get all user infos from database.
 * @returns {Array} result - search result.
 */
async function getAllUser(){
    try{
        let result = await mDBusers.findAll();
        mLogger.info(`[SQL cmd] MySQL successfully get datas ${JSON.stringify(result,null,2)}`);
        return result;
    }catch(error){
        mLogger.error(`[SQL cmd] MySQL fail get datas ${JSON.stringify(error,null,2)}`);
        throw error;
    }
}

/**
 * 1. Create a new user in databse.
 * @param {JSON} userInfo - User information.
 */
async function createUser(userInfo){
    try{
        let record = _.pick(userInfo, TABLE_ATTRIBUTES);
        let result = await mDBusers.create(record);
        mLogger.info(`result: ${result}`);
        mLogger.info(`[SQL cmd] MySQL successfully create user ${JSON.stringify(result,null,2)}`);
        return result.toJSON();
    }catch(error){
        mLogger.error(`[SQL cmd] MySQL fail create user ${JSON.stringify(error,null,2)}`);
        throw error;
    }
}

/**
 * 1. Get a userinfo by uid.
 * @param {JSON} userInfo - User information.
 */
async function getUserInfoById(uid){
    try{
        let result = await mDBusers.findOne({
                where: {
                    uid: uid
                  }
            }
        );
        mLogger.info(`result: ${result}`);
        mLogger.info(`[SQL cmd] MySQL successfully get user ${JSON.stringify(result,null,2)}`);
        return result.toJSON();
    }catch(error){
        mLogger.error(`[SQL cmd] MySQL fail get user ${JSON.stringify(error,null,2)}`);
        throw error;
    }
}

/**
 * 1. Get userinfo by email.
 * @param{String} email - user email.
 */
async function getUserInfoByEmail(email){
    let userInfo;
    try{
        let result = await mDBusers.findOne({
                where: {
                    account: email
                  }
            }
        );
        userInfo = result;
        mLogger.info(`[SQL cmd] MySQL successfully get user ${JSON.stringify(userInfo,null,2)}`);

        return userInfo;
    }catch(error){
        mLogger.error(`[SQL cmd] MySQL fail get user ${JSON.stringify(error,null,2)}`);
        throw new Exception(FN_FAIL_STATUS, userInfo, error);
    }
}

exports.getAllUser = getAllUser;
exports.createUser = createUser;
exports.PRIMARY_KEYS = PRIMARY_KEYS;
exports.TABLE_ATTRIBUTES = TABLE_ATTRIBUTES;
exports.getUserInfoById = getUserInfoById;
exports.getAllUser = getAllUser;
exports.getUserInfoByEmail = getUserInfoByEmail;