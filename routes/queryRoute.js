const express = require('express')
const Query_route = express();
require('../models/app')
require('../models/user')

Query_route.use(express.json())

const Qcntrl = require('../Controller/queryController')

Query_route.post('/post',Qcntrl.queryUser)

Query_route.get('/findall',Qcntrl.findQuery)

Query_route.get('/order',Qcntrl.orderQuery)


Query_route.get('/findCount',Qcntrl.findCount)


module.exports = Query_route