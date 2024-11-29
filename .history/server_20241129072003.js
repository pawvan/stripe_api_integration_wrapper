const express = require('express' )
const dotenv  = require('dotenv')
const paymentRoutes  =  require('./routes/paymentRoutes')
const subscriptionRoutes  = require('./routes/subscriptionRoutes')


dotenv.config()





const app = express()
app.use(express.json())


