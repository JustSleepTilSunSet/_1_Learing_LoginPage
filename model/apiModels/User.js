const usersRepo = require('../repository/usersRepo');

module.exports = class Users{
    constructor(obj){
        this.email = obj.email;
    }

    async getAllUser(){
        return (await usersRepo.getAllUser());
    }

    async getUserInfoByMail(){
        return (await usersRepo.getUserInfoByEmail(this.email));
    }
}