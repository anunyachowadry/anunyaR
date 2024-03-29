const express = require('express')
const mongoose= require ('mongoose')


const Product = require('../Models/product');









const router = express.Router();   // requiring router

router.get('/products', async (req,res) =>{ 
    try{  
    
         
        
        const products = await Product.find({})  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            Totalproducts : products.length,   // length of the products in schema
            products
        })
    }catch (error) {
        res.status(400).send(error)
    } 
    })

    router.post('/create',(req,res,next)=>{ //want to create employee details
        const product = new Product(req.body)       
        product.save()//save schema
        .then(result => {   // async tasks 
            res.status (201).json({
                message: "product created" ,
                createdProduct: product
                
            })
        })
        .catch(error => {
            res.status(400).json({Error: error})
        })
    
    });
    
   router.get('/getbyName/:Name',async(req,res)=>{      
        try{
            const product= await Product.find({Name:req.params.Name})
            if(!product){
                res.status(404).send({error: "product not found"})
            }
            res.status(400).json({
                Totalproducts:product.length,
                product})
        }catch(error){
            res.status(401).json({error})
            console.log(error)    //console .log outputs the message to web console
        }
    });


    
    module.exports=router 