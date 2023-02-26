const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({

   prodId:{
       type: String,
    
    },
    name:{
       type: String,
      
    },
    imgurl:{
      type: String,
    
     },
     price:{
      type: String,
     },
     qnt:{
      type: String,
     },
      Totalprice:{
         type:Number
      },
      grandtotal:{
         type:Number
      }
    
   
     })

    const Product = mongoose.model('product', productSchema)
    
module.exports = Product