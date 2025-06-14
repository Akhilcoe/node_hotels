const express=require('express');
const router=express.Router();
const MenuItem=require('../models/MenuItem');

router.post('/', async(req,res)=>{
  try{
    const data=req.body
    const newMenuItem=new MenuItem(data);
    const response=await newMenuItem.save();
    console.log('data saved');
    res.status(200).json(response);


  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }

})
router.get('/',async(req,res)=>{
  try{
    const data=await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server error'});
  }
})
router.get('/:taste',async(req,res)=>{
    try{

    }
    catch(err){

    }
})
//comment
module.exports=router;

