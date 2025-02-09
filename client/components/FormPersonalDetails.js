import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
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
      <div className="card mt-5">
        <div className="card-header">
          <h3>Enter Personal Details</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
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
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
          </div>
          <button className="btn btn-primary mr-2" onClick={continueClick}>
            Continue
          </button>
          <button className="btn btn-secondary" onClick={backClick}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPersonalDetails;