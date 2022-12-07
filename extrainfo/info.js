
// const {Model,DataTypes} = require('sequelize')
// const sequelize = require('./app')

// class User extends Model {}

// User.init({
//     firstName :{

//     type :  DataTypes.STRING,
//     allowedNull : false
//     },
//     lastName : {
//         type : DataTypes.STRING,
//         defaultValue :' kumar'
//     }

//   },{

//    sequelize,   /*(need to pass connection instance)*/
//    modelName : 'User'   /* (need to choose the model name)*/

//   })

// module.exports = User;






// await sequelize.sync() (it will automatically synchronize all the models)



// User.sync({force : true}) 
// (if a table already exists by the name User, that table will be
//  dropped and a new table will be created)


// User.sync({alter : true})
// (if a table already exists by the name User,it will be updated)



// To Drop A Single Table
// User.drop();  (User table will be dropped)


// To Drop All The Tables
//  await sequelize.drop();  (all the tables in the database will be dropped)

