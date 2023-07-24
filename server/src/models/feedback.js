const mongoose=require('mongoose');
const schema= new mongoose.Schema({


    email:{
        type:String,
        required:[true,'Email is Required']
    },
    name:{
        type:String
    },
    address:{
        type:String
    },
    feedback:{
type:String
    }
})


    const Feedback= new mongoose.model("Feedback",schema);
    module.exports=Feedback;
    // this is the table which we have made for storing the feedback of the users













