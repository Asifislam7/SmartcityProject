import React, { useState } from 'react'
import styles from "../styles/components/Wastemanage.module.css"
import axios from 'axios'
import 'animate.css';


const Wastemanage = () => {
//creating the states for all the data
const[email,setEmail]=useState('');
const[address,setAddress]=useState('');
const[city,setCity]=useState('');
const[zip,setZip]=useState('');
const[file,setFile]=useState('');


const handleSubmit= async(e)=>{
e.preventDefault();


try {
//sendeing a post request to the express js server
await axios.post('http://localhost:8000/client/pages/Wastemanage',{email,address,city,zip},{withCredentials:true});
console.log('Data saved');


  
} catch (error) {
  console.log('error saving the data',error);
}

}

  return(
    <div className="animate__animated animate__fadeInDown container rounded-5 mx-auto  my-5 d-flex align-items-center justify-content-center w-75 bg-light text-dark fs-2 p-5">
    <form className="row g-5 mx-auto" onSubmit={handleSubmit} >
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label my-3">Email</label>
    <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' className='form-control h-50 text-lowercase' id='inputEmail4'  />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label my-3">Password</label>
    <input type="password" className="form-control h-50" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label my-3">Address</label>
    <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" className="form-control h-50" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label for="inputAddress2" className="form-label my-3">Address 2</label>
    <input type="text" className="form-control h-50" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label my-3">City</label>
    <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text" className="form-control h-50" id="inputCity"/>
  </div>
  <div className='col-mid-4'>
  <label className="form-label my-3" for="customFile">Upload the photo of the waste</label>
<input type="file"  class="form-control h-50" id="customFile" />
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label my-3">Zip</label>
    <input value={zip} onChange={(e)=>{setZip(e.target.value)}} type="text" className="form-control h-50" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check mt-5">
      <input className="form-check-input " type="checkbox" id="gridCheck"/>   
      <label className="form-check-label my-3" for="gridCheck">
        Check me out here
      </label>
    </div>
  </div>
  <div className="col-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <button type="submit" className="btn btn-warning w-25 fs-3 my-5 rounded-5 link-opacity-50-hover h-50">Submit to Officials</button>
    {/* <button type="submit" className="btn btn-primary">Submit to private Parties</button> */}
    
  </div>
</form>
</div>
  )
}

export default Wastemanage;
