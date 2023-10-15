import axios from "axios";
import React,{useState,useEffect} from "react";
//useEffect can check the rendering of the page on the basis of the dependencies


 const Contact = () => {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const[password, setPassword]=useState('');
  const[cnfpassword,setcnfPassword]=useState('');


  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    if(password === cnfpassword){
  
    try {
    //sending a post request to the express js server
    await axios.post('http://localhost:8000/client/pages/Contact',{username,email,password},{withCredentials:true})
    console.log('Data saved');
    alert("you have been registered");

  
    } catch (error) {
      console.log('error saving the data',error);
      alert("data not saved");
    }
  }
  else{
    alert("password does not match");
  }
    }

   

 

  return (
    <div className="container mx-auto">
      <h2 className="common-heading animate__animated animate__fadeInUp text-black-50 shadow-lg my-5 fs-1" style={{color:'black',fontFamily:'kolketif'}}>Feel Free to Contact us, Find us on Map</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
  
  <h2 className="bg-warning-subtle shadow-lg w-50 mx-auto my-5 fw-light text-black-50" style={{fontFamily:'kolketif'}}>Register here</h2>

  <div className="animate__animated animate__fadeInDown container rounded-5 mx-auto  my-5 d-flex align-items-center justify-content-center w-75 bg-light text-dark fs-1 p-5">
    <form className="row g-3 mx-auto" id="contactForm" onSubmit={handleSubmit} >
    <div className="col-md-6">
    <label for="username" className="form-label my-3">Username</label>
    <input  value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control h-50 text-lowercase" id="Username" placeholder="Only lower case username allowed"/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label my-3">Email</label>
    <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control h-50" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label my-3"> Create Password</label>
    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control h-50" id="inputPassword4" placeholder="Password length cannot exceed more than characters"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label my-3">Confirm Password</label>
    <input type="password" value={cnfpassword} onChange={(e)=>{setcnfPassword(e.target.value)}} className="form-control h-50" id="inputPassword4"/>
  </div>
  <div className="col-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <button type="submit" className="btn btn-success w-25 fs-3 my-5 rounded-5 link-opacity-50-hover h-50">Submit</button>
    {/* <button type="submit" className="btn btn-primary">Submit to private Parties</button> */}
    
  </div>
</form>
</div>
      </div>
  );
};



export default Contact;


