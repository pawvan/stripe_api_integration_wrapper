




/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/

const {createSubscription } = require('../services/stripeServices')
const createSubscription = async (req,res,next)=>{
    try{
        const {customerId,priceId} = res.body;
        
    }
}