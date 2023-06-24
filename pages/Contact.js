import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading animate__animated animate__fadeInUp" style={{color:'white'}}>Feel Free to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container" style={{display:'flex'}}>
      <h1><p className="hero-top-data" style={{color:'white',fontSize:'3rem'}}>Register Here</p></h1>
        <div className="contact-form" >
          <form
            action="https://formspree.io/f/xgedgjkr"
            method="POST"
            className="contact-inputs" style={{background:'white', width:'650px'}}>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            {/* <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required placeholder="Enter the Exact address of the Complaint"></textarea> */}
               <input
              type="email"
              name="Email"
              placeholder="Create Password"
              autoComplete="off"
              required
            />
              <div className='col-mid-4'>
  <label class="form-label"style={{color:'yellow'}} for="customFile">Upload the photo of your Id</label><br></br><br></br><br></br>
<input type="file" class="form-control" id="customFile" />
  </div>

            <input type="submit" value="Register"  style={{margin:'auto'}}/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
