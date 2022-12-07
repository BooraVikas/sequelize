const {Sequelize,DataTypes} = require('sequelize')

const sequelize = require('./app')

const Contact = sequelize.define('contact',{   /*( 'contact' will be the name of table )*/

    permanent_address : {
        type : DataTypes.STRING,
        allowNull : false
    },
    current_address : {
        type : DataTypes.STRING
    }
})

module.exports = Contact;