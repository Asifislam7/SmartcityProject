import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import styled from "styled-components";

const Success = ({ nextStep, prevStep }) => {
  const continueClick = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    nextStep();
  };

  const backClick = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="container">
      <div className="modal-dialog animate__animated animate__fadeInDown w-75 m-auto">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Success</h5>
          </div>
          <div className="modal-body">
            <h4>Thank you for your submission!</h4>
            <p>Your form has been successfully submitted.</p>
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

export default Success;