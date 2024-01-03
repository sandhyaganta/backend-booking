const express=require("express");
const route=express.Router();
const admindata=require("./adminModel");
const { json } = require("body-parser");

route.post("/create",(req,res)=>{
    const ad=new admindata(req.body);
    ad.save();
    res.status(201).json(ad);
});

export const userLogin=async(req,res)=>{
    try{
        const User=await userModel.findOne({"username":req.body.username,"mobileno":req.body.mobileno})
        if(!User){
            res.status(404).json('user not found')
        }
        const secretkey='my-secretkey';
        const token=jwt.sign({"username":req.body.username,"mobileno":req.body.mobileno},secretkey,{})
        res.status(201).json({User,token})

    }
    catch{
        res.status(500).json({err:'User login failed'})

    }
};

route.get("/viewusers",async(req,res)=>{
    const users=await admindata.find();
    res.status(201).json(users);
});
module.exports=route;