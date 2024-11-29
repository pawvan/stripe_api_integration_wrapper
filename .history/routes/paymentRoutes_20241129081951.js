
/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/









const express = require('express')


const {
createPayment
}
 =require('../controllers/paymentControllers')


 const router  = express.Router()



// creating route for paymentIntent



router.post('/create',createPayment)

module.exports=router