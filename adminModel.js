const mongoose=require("mongoose");
const schema=mongoose.Schema;
const admin=new schema({
    flightnumber:{
        type:String,
        required:true,
    },
    flightname:{
        type:String,
        required:true,
    },
    arrivaldate:{
        type:String,
        required:true,
    },
    arrivaltime:{
        type:String,
        required:true,
    },
    depaturedate:{
        type:String,
        required:true,
    },
    depaturetime:{
        type:String,
        required:true,
    },
    seats:{
        type:Number,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    source:{
        type:String,
        required:true,
    },
    Destination:{
        type:String,
        required:true,
    },
    action:{},   
} ,{
    timestamps:true
});
module.exports=mongoose.model("admins",admin)
