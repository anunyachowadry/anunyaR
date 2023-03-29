const express = require('express')
const mongoose= require ('mongoose')


const Blueproduct = require('../Models/blueproduct');









const router = express.Router();   // requiring router

router.get('/products', async (req,res) =>{ 
    try{  
    
         
        
        const blueproducts = await Blueproduct.find({})  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            Totalblueproducts : blueproducts.length,   // length of the products in schema
            blueproducts
        })
    }catch (error) {
        res.status(400).send(error)
    } 
    })

    router.post('/create',(req,res,next)=>{ //want to create employee details
        const blueproduct = new Blueproduct(req.body)       
        blueproduct.save()//save schema
        .then(result => {   // async tasks 
            res.status (201).json({
                message: "blueproduct created" ,
                createdProduct: blueproduct
                
            })
        })
        .catch(error => {
            res.status(400).json({Error: error})
        })
    
    })

    module.exports=router