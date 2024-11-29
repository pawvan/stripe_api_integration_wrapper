/*
  This code belongs to Pawvan.
  It is part of the stripe_api_int
  Licensed under MIT.
*/




const Joi = require('joi')

const paymentSchema = Joi.object({
    amount:Joi.number().required()
,

currency:Joi.string().
})