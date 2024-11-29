


/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/

const express = require('express' )
const dotenv  = require('dotenv')
const paymentRoutes  =  require('./routes/paymentRoutes')
const subscriptionRoutes  = require('./routes/subscriptionRoutes')
const { Console } = require('console')


dotenv.config()





const app = express()
app.use(express.json())

// this the middle ware too parse the JSON requests

app.use('/api/payments',paymentRoutes)
app.use('/api/subscription',subscriptionRoutes)


const PORT = process.env.PORT || 3000



app.listen(PORT,()=>{

    console.log)