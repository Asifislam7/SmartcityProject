// const { ContactEmergency } = require("@mui/icons-material");
const mongoose= require("mongoose");
const contractorschema= new mongoose.Schema({
    userid:{
        type:String
    },
    password:{
        type: String,
        required:[true, "password is required"],
    }
});


//creating a model in the database, model is equivalent to table for the SQL
const contractor= new mongoose.model("contractor", contractorschema);
module.exports= contractor; //exporting this module