import React from 'react';
import 'animate.css'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
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
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='md'
          className='dialog'
        >
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions.</p>
        </Dialog>
     
      </>
    </MuiThemeProvider>
  );
 
};


export default Success;
