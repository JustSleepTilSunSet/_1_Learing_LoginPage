let {sequelize} = require('../index');
let {Sequelize}= require('sequelize');

let users = function (){
  let users = sequelize.define('users', {
      // Model attributes are defined here
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      account:  {
        type: Sequelize.STRING
      },
      pwd: Sequelize.STRING
    },
    {
      timestamps: false,//取消強迫擁有createdAt 跟 updatedAt。
      freezeTableName: true//正名表，避免多加一個s。
    }
  );

  return users;
}

exports.usersModel = users;