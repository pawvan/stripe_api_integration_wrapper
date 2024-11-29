/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration
  Licensed under MIT.
*/

const { error } = require("console")


const errorHandler  =  (err,res,res,next)=>{
    console.error(err)

res.status(500).json(
    {
        error:err.message
    }
)

}
module.exports=errorHandler