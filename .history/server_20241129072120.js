const express = require('express' )
const dotenv  = require('dotenv')
const paymentRoutes  =  require('./routes/paymentRoutes')
const subscriptionRoutes  = require('./routes/subscriptionRoutes')


dotenv.config()





const app = express()
app.use(express.json())

// this the middle ware too parse the JSON request

app.use('/api/payments',paymentRoutes)
app.use('/api/subscription',subscriptionRoutes)
