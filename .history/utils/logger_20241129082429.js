/*
  This code belongs to Pawvan.
  It is part of the stripe_api_integration_wrapper project.
  Licensed under MIT.
*/





const winston  = require('winston')

const logger  =winston.createLogger({
    level:'info',
    transports:[
        new winston.transports.Console({
            format:winston.format.simple(),

        }),
        
    ]
})