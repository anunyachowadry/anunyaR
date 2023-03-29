const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const blueproductSchema = new mongoose.Schema({

   Name:{
       type: String,
    
    },
    Size:{
       type: String,
      
    },
   Price:{
      type: String,
    
     },
     Quantity:{
      type: String,
     },
     Image:{
      type: String,
     },
      Thickness:{
         type:String
      },
      Location:{
         type:String
      },
      Quality:{
         type:String
      },
      ProcessingDate:{
         type:String
      },
      Description:{
         type:String
      },
      ProductId:{
         type:String
      }
    
   
     })

    const Blueproduct = mongoose.model('blueproduct', blueproductSchema)
    
module.exports = Blueproduct