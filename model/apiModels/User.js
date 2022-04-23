let mLogger = require('log4js').getLogger('/User.js');
mLogger.level = "all";
const usersRepo = require('../repository/usersRepo');
module.exports = class Users{
    constructor(obj){
        this.account = obj.email;
        this.pwd = obj.pwd;
        this.id = `${obj.email}_${obj.pwd}`;
    }

    async createUser(){
        await usersRepo.createUser({
            account: this.account,
            pwd: this.pwd,
            id: this.id
        });
    }

    async updatePassword(){
        await usersRepo.updatePassword({
            pwd:this.pwd
        },{
            account:this.account
        });
    }

    async getAllUser(){
        return (await usersRepo.getAllUser());
    }

    async getUserInfoByMail(){
        return (await usersRepo.getUserInfoByEmail(this.email));
    }
}