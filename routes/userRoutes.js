const express = require('express')
require('../models/app')
require('../models/user')

const User_route = express();
User_route.use(express.json())

// Require Controller
const usercntrl = require('../Controller/userController')

User_route.patch('/update/:id',usercntrl.patchData)

User_route.get('/add',usercntrl.addUser) 
User_route.get('/fetchRecord',usercntrl.getUsers)
User_route.get('/oneUser/:id',usercntrl.getOne)

User_route.post('/create',usercntrl.createUser)
User_route.post('/createMany',usercntrl.createRows)

User_route.delete('/delete/:id',usercntrl.deleteUser)



module.exports = User_route