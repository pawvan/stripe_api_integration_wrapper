




/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/

const {createSubscription } = require('../services/stripeServices')
const createSubscription = async (req,res,next)=>{
    try{
        const {customerId,priceId} = res.body;
const subscription  = await createSubscription(customerId,priceId)
res.status(200).json(subscription)
}
    catch(error){

next(error)
        res.status(500).json({
            error:error.message
        })
    }
}



module.exports = {
    
}