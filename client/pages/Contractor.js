import React from 'react'
// import "./components/css/style.css";
import styles from "../styles/components/Contractor.module.css"
import "animate.css"
import Link from 'next/link';
const Contractor = () => {
  return (
    
    <div className={styles.ContractorForm}>
 
{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div> */}

<label for="basic-url" class="form-label">User Id</label>
<div class="input-group mb-3">
  {/* <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
  <input type="text" class="form-control active
  " id="basic-url" aria-describedby="basic-addon3"/>
</div>
<label for="basic-url" class="form-label"> Password</label>
<div class="input-group mb-3">
  {/* <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>
<Link href="/waste/contractor/details"><button className='btn btn-success' id={styles.btncont}>Submit</button></Link>

    </div>
    
  )
}

export default Contractor
