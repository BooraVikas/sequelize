const { Sequelize,DataTypes } = require('sequelize')

const sequelize = require('./app')

const Student = sequelize.define('Student',{
    firstName : {
        type : DataTypes.STRING,

        get(){
            const rawValue = this.getDataValue('firstName');
            return rawValue ? rawValue.toUpperCase() : null;
        }
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
    tableName : 'students'
})



module.exports = Student;