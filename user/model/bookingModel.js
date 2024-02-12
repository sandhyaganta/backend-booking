const mango=require('mongoose');
const schema=mango.Schema
const book=new schema({
    userid:{
        type:String,
        require:true,
    },
    flightid:{
        type:String,
        require:true,
    },
    bookingid:{
        type:String,
        require:true,
        
    },
    bookingdate:{
        type:String,
        
    },
    noofseats:{
        type:Number,
        require:true,
    },
    totalamount:{
        type:Number,
        require:true,
    },
    status:{
        type:Number,
        require:true,
        
    }

    
},
{
    timestamps: true,
}
);
module.exports=mango.model("book",book)