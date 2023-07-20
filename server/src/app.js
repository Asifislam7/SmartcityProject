const express=require("express");
const bodyParser= require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(
    cors({
      origin: "http://localhost:3001",
      credentials: true,
    })
  );


require("./db/conn");
const Register= require("./models/registration");
const userregister= require("./models/useregister");


//path we dont require here as we are not diplaing from the backend, we are displaying through the frontend.


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









// we use render for a view engine

app.listen(8000,(req,res)=>{
    console.log(`Server running on port 8000`);
});