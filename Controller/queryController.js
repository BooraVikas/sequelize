const User = require('../models/user')
require('../models/app')
require('../models/user')

const queryUser = async(req,res)=>{
    try{
    const Qdata = await User.create({
        firstName : "ajay",
        "lastName":"singh",
        age : 19
    },
    {fields:['firstName']} );   /*(it will only insert firstname into table)*/
    res.status(200).json({data:Qdata})
   
}catch(err){
    console.log(err)
}
}


const findQuery = async(req,res)=>{
    const FindData = await User.findAll({
        attributes : ["id","firstName"]
    })
    res.status(200).json({data:FindData})
    
}


const orderQuery  = async(req,res)=>{
    const data = await User.findAll({
        order : [
            ['id','DESC']
        ]
    })
    res.status(200).json({data:data})
}



const findCount = async(req,res)=>{
    const {count,rows} = await User.findAndCountAll({
        where : {
            lastName : 'sihag'
        }
    })
    res.status(200).json({data:rows,count:count})
}



module.exports = {queryUser,findQuery,orderQuery,findCount}