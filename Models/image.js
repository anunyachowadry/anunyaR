const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const imageSchema = new mongoose.Schema({

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
      type: Number,
     },
      Totalprice:{
         type:Number
      },
      grandtotal:{
         type:Number
      }
    
   
     })

    const Image = mongoose.model('image',imageSchema)
    
module.exports = Image