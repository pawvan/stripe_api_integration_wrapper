
/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/


const express = require('express')
const {createSubscription} = require('../services/stripeServices')



const router = express.Router()

router.post('/create',async (req,res)=>{
    try{

const {customerId,priceId} =req.body
 


}
    catch(error){
        res.status(500).json({
            error:error.message
        })
    }
})


