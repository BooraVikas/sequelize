const { Sequelize,DataTypes } = require('sequelize')

const sequelize = require('./app')

const User = sequelize.define('User',{
    firstName : {
        type : DataTypes.STRING
        
    },
    lastName : {
        type : DataTypes.STRING,
        defaultValue : "kumar"
    },
    age : {
        type : DataTypes.INTEGER
    }
},
{
    tableName : 'users'
})



module.exports = User;