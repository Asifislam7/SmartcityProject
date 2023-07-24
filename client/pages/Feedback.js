import React,{use, useState} from "react";
import "animate.css"
import styles from "../styles/components/Feedback.module.css"
import axios from "axios";
const CardWithFeedback=() =>{

  const[feedback,setFeedback]=useState('');
  const[email,setEmail]=useState('');
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
 


  const handleSubmit = async(e) => {
    e.preventDefault();
    // Submit feedback data to the server or perform other actions
    alert('Thank you for your feedback!');
    setFeedback('');

  try {

    await axios.post('http://localhost:8000/client/pages/Feedback',{email,name,address,feedback},{withCredentials:true});
    console.log("data saved")
    
  } catch (error) {
    console.log("error saving the data")
  }




  };
 

  return (
    <>
    <div className="animate__animated animate__fadeInDown container rounded-5 mx-auto  my-5 d-flex flex-lg-nowrap flex-sm-wrap align-items-center justify-content-center w-75 bg-light text-dark fs-2 p-5">
      <div className={styles.container}>
  <h2 className="bg-light shadow-lg w-75 mx-auto my-5 fw-light text-black-50" style={{fontFamily:'kolketif'}}>Feedback</h2>
  <div className="card w-50 mx-auto my-5">
  <img src="/images/feedback.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fs-2">Feedback</h5>
    <p className="card-text">Some quick feedback from your side to help us improve ourselves and provide you better.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>
<div className="mt-5 mx-5 d-flex flex-column">
    <form className="row g-3" onSubmit={handleSubmit} >
    <div className="col-12">
    <label for="inputEmail4" className="form-label my-3">Email</label>
    <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control h-50" id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label my-3">Name</label>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control h-50" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label my-3">Address</label>
    <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control h-50" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label my-3">Comments or Feedback</label>
  <textarea value={feedback} onChange={(e)=>{setFeedback(e.target.value)}} class="form-control h-50" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

  </div>

  <div className="col-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <button type="submit" className="btn btn-success w-50 fs-3 my-5 rounded-5 link-opacity-50-hover h-50">Submit</button>
    {/* <button type="submit" className="btn btn-primary">Submit to private Parties</button> */}
    
  </div>
  <b-form-rating v-model="value"></b-form-rating>

</form>
</div>
<div>
</div>
  </div>
 </>
  );
}

export default CardWithFeedback;