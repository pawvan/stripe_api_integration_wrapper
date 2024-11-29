/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/

const {createPaymentIntent} =require('../services/stripeServices')

const createPayment  = async (req,res,next)=>{
try{
const {amount,money} =  req.body


const paymentIntent  = await createPaymentIntent(amount,currency)
res.st
}
catch(error){

}

}