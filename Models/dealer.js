const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const dealerSchema = new mongoose.Schema({

 
name:{
       type: String,
      
    },
    Image:{
      type: String,
    
     }
    
   
     })

    const Dealer = mongoose.model('dealer',dealerSchema)
    
module.exports = Dealer