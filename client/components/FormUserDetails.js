import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const FormUserDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backClick = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="container">
      <div
        className="modal-dialog animate__animated animate__fadeInDown w-75 m-auto"
        style={{ height: '75vh', fontSize: '40px' }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Enter User Details</h5>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter Your First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Your Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={continueClick}>
              Continue
            </button>
            <button className="btn btn-secondary" onClick={backClick}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUserDetails;