const mongoose=require('mongoose');

const carSchema=new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    description:{
        type:String,
       
    },
    price:{
        type:Number,
    },
    year_of_built:{
        type:Number,
    }
});

module.exports=mongoose.model('Car',carSchema);