const express = require('express')
const mongoose= require ('mongoose')


const Image= require('../Models/image');









const router = express.Router();   // requiring router

router.get('/images', async (req,res) =>{ 
    try{  
    
         
        
        const images = await Image.find({})  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            Totalimages : images.length,   // length of the products in schema
           images
        })
    }catch (error) {
        res.status(400).send(error)
    } 
    })

    router.post('/create',(req,res,next)=>{ //want to create employee details
        const image = new Image(req.body)       
        image.save()//save schema
        .then(result => {   // async tasks 
            res.status (201).json({
                message: "image created" ,
                createdImage: image
                
            })
        })
        .catch(error => {
            res.status(400).json({Error: error})
        })
    
    })

    module.exports=router