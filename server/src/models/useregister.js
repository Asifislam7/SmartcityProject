const mongoose= require("mongoose");
const userschema= new mongoose.Schema({

    username:{
        type:String,
        
    },
    email:{
        type:String,
        required:[true,"Email is Required"] , 
        unique: true
    },
    password:{
        type:String,
        maxlength :8,
    }
})

//now creating a seperate table for the user registration in the database also called as collection
const useregister= new mongoose.model("User",userschema);
module.exports =useregister;  //exporting this model so that we can use it
