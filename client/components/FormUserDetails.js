import React from 'react';
import { MuiThemeProvider, Dialog, TextField, Button, AppBar } from '@material-ui/core';
import 'animate.css'
const FormUserDetails = ({ values, handleChange, nextStep }) => {
  const continueClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backClick = (e) => {
    e.preventDefault();
    prevStep();
  };


  return (
    <>
      <MuiThemeProvider>
        <Dialog
          open
          fullWidth
          maxWidth='md'
          style={{ height: '75vh', fontSize: '40px' }}
          className='animate__animated animate__fadeInDown w-75 m-auto'
        >
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            margin="normal"
            required
            className='w-75 m-auto'
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            margin="normal"
            className='w-75 m-auto'
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin="normal"
            className='w-75 m-auto'
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={continueClick}
            className='w-50 m-auto my-3'
          >
            Continue
          </Button>
          {/* <Button
            color="secondary"
            variant="contained"
            onClick={backClick}
            className='w-50 m-auto my-3'
          >
            Cancel
          </Button> */}
        </Dialog>
      </MuiThemeProvider>
    </>
  );
};

export default FormUserDetails;
