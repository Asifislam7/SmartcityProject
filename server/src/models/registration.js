const mongoose= require("mongoose");
const schema= new mongoose.Schema({

    email:{
        type:String,
        required:[true,"Email is Required"] , 
        unique: true
    },
    address:{
        type:String,
    },
    city:{
        type:String,
        maxlength :1024,

    },
    zip:{
        type:Number
    }
})

// now creating a collection also called as table in RDBMS for the database
const Register= new mongoose.model("Register",schema);
module.exports=Register;

// remember: Database is there then it has table which is called model in mongo and 
// inside the table we have rows of particular data which is called document in mongo
// schema is the arranggement of the data inside the model.
