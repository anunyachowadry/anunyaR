const express = require('express')
const mongoose= require ('mongoose')


const Dealer = require('../Models/dealer');









const router = express.Router();   // requiring router

router.get('/dealers', async (req,res) =>{ 
    try{  
    
         
        
        const dealer = await Dealer.find({})  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            Totaldealer : dealer.length,   // length of the products in schema
            dealer
        })
    }catch (error) {
        res.status(400).send(error)
    } 
    })
    

    router.post('/create',(req,res,next)=>{ //want to create employee details
        const dealer = new Dealer(req.body)       
        dealer.save()//save schema
        .then(result => {   // async tasks 
            res.status (201).json({
                message: "product created" ,
                createdDealer: dealer
                
            })
        })
        .catch(error => {
            res.status(400).json({Error: error})
        })
    
    })
    router.get('/getbyName/:name',async(req,res)=>{      
        try{
            const dealer= await Dealer.find({name:req.params.name})
            if(!dealer){
                res.status(404).send({error: "dealer not found"})
            }
            res.status(400).json({
                Totaldealer:dealer.length,
                dealer})
        }catch(error){
            res.status(401).json({error})
            console.log(error)    //console .log outputs the message to web console
        }
    });

    module.exports=router