const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({

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
      },
      Totalprice:{
         type:String
      }
    
   
     })

    const Product = mongoose.model('product', productSchema)
    
module.exports = Product