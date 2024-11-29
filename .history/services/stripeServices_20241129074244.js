
/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/



const stripe  = require('stripe')(process.env.STRIPE_SECRET_KEY);
const createPaymentIntent = async (amount,currency='usd')=>{
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount,currency
        })
        return paymentIntent
    }
    catch(error){
        throw new Error('failed to create payment intent')
    }
}