import axios from "axios";
import React, { useState, useEffect } from "react";
//useEffect can check the rendering of the page on the basis of the dependencies
const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setcnfPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === cnfpassword) {

      try {
        //sending a post request to the express js server
        await axios.post('http://localhost:8000/client/pages/Contact', { username, email, password }, { withCredentials: true })
        console.log('Data saved');
        alert("you have been registered");

      } catch (error) {
        console.log('error saving the data', error);
        alert("data not saved");
      }
    }
    else {
      alert("password does not match");
    }
  }





  return (
  <>
  <h1>Contact Us</h1>
  </>
  );
};



export default Contact;


