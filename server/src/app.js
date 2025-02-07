const express=require("express");
const bodyParser= require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

app.get("/",(req,res)=>{
  res.send("Server running properly")
})
require("./db/conn");
//connection already made
const Register= require("./models/registration");
const userregister= require("./models/useregister");
const FeedbackData= require("./models/feedback");
const contractorlogin= require("./models/contractor");

//path we dont require here as we are not displaing from the backend, we are displaying through the frontend.


//defining the route to get the data to store in the database
app.post('/client/pages/Wastemanage', async (req,res)=>{

    const {email,address,city,zip}= req.body;
   


//creating a new data document
const Data=new Register({email,address,city,zip})

// saving the document to the database
await Data.save();
res.status(200).send("Registration successfull");
});


//defining the route to get the data to store in the database
app.post('/client/pages/Contact', async (req,res)=>{

  const {username,email,password}= req.body;
 


//creating a new data document
const Data=new userregister({username,email,password})

// saving the document to the database

await Data.save();
res.status(200).send("Registration successfull");
});


app.post('/client/pages/Feedback',async(req,res)=>{
  // this is th 

const {email,name,address,feedback}=req.body;

// creating the data document
const feedbackData = new FeedbackData({email,name,address,feedback});

await feedbackData.save();
res.status(200).send("Registration successfull");

});
//finally saving the document


//saving the data of the contractor
app.post('/client/pages/Contractor',async(req,res)=>{
  const{userid, password}= req.body;

  //creating the document to store in the model 
  const contractordata = new contractorlogin({userid,password});


await contractordata.save();
res.status(200).send("welcome to the dashboard");

});
// we use render for a view engine

app.listen(8000,(req,res)=>{
    console.log(`Server running on port 8000`);
});