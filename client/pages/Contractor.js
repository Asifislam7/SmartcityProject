import React, { useState } from 'react'
// import "./components/css/style.css";
import styles from "../styles/components/Contractor.module.css"
import "animate.css"
import Link from 'next/link';
import axios from 'axios';


const Contractor = () => {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    if(password && userid){
    //checking the password from the stored register, will change later 
    try {
      await axios.post('http://localhost:8000/client/pages/Contractor', { userid, password }, { withCredentials: true });
      console.log("data saved");
      alert("welcome to the dashboard");
    } catch (error) {
      console.log("error saving the data", error);
    }
  }
  else{
    alert("fill the details to login");
  }
}

  return (

    <div className={styles.ContractorForm}>
      {/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div> */}
      <form onSubmit={handleSubmit}>
        <label for="basic-url" class="form-label">User Id</label>
        <div class="input-group mb-3">
          {/* <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
          <input type="text" class="form-control active
  " value={userid} onChange={(e) => { setUserid(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" />
        </div>
        <label for="basic-url" class="form-label"> Password</label>
        <div class="input-group mb-3">
          {/* <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
          <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
        </div>
        <Link href="/Dashboard">
          <button className='btn btn-success' id={styles.btncont}>Submit</button>
          </Link>
      </form>
    </div>

  )
}

export default Contractor
