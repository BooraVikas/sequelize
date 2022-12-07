const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.json())

require('./models/app')   /*( require database)*/
const User = require('./models/user')
const Contact = require('./models/contact');

 
// User Routes
const user_Route = require('./routes/userRoutes')
app.use(user_Route)


// Query Routes
const queryRouter = require('./routes/queryRoute')
app.use(queryRouter)


User.sync({alter:true})
Contact.sync({alter:true})

//  sequelize.sync();   /* (this command will sync all the connections)*/


app.listen(7000, () => {
    console.log('server listening at 7000')
})
