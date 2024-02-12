const express=require("express");
const route=express.Router();
const admindata=require("./../models/adminModel");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken")

route.post("/create",(req,res)=>{
    const ad=new admindata(req.body);
    ad.save();
    res.status(201).json(ad);
});

// export const userLogin=async(req,res)=>{
//     try{
//         const User=await userModel.findOne({"username":req.body.username,"mobileno":req.body.mobileno})
//         if(!User){
//             res.status(404).json('user not found')
//         }
//         const secretkey='my-secretkey';
//         const token=jwt.sign({"username":req.body.username,"mobileno":req.body.mobileno},secretkey,{})
//         res.status(201).json({User,token})

//     }
//     catch{
//         res.status(500).json({err:'User login failed'})

//     }
// };

route.post("/login",async(req,res)=>{
    try{
    const admin = await admindata.findOne({"username":req.body.username,"password":req.body.password})
    if(!admin){
        res.status(404).json('admin not found')
    }
    const secretkey = 'my-secretkey';
    const token = jwt.sign({"username":req.body.username,"password":req.body.password},secretkey,{ expiresIn:'1h'})
    res.status(201).json({admin,token}); 
    }
    catch(err){
        res.status(500),json({err:'admin login failed'})

    }
});











//     if(res){
//         res.status(201).json(res);
//       }else{
//         res.status(500).json('user login failed'); 
//       }

module.exports=route;