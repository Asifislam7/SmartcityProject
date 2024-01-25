import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import 'animate.css'
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='md'
          style={{ height: '75vh', fontSize: '40px' }}
          className='animate__animated animate__fadeInDown w-75 m-auto'
        >
          <AppBar title="Enter Personal Details" />
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            margin="normal"
            fullWidth
            className='w-75 m-auto'
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            margin="normal"
            fullWidth
            className='w-75 m-auto'
          />
          <br />
          <TextField
            placeholder="Enter Your concern"
            label="concern"
            onChange={handleChange('concern')}
            defaultValue={values.concern}
            margin="normal"
            fullWidth
            className='w-75 m-auto'
          />
          <br />

          <Button
            color="secondary"
            variant="contained"
            onClick={backClick}
            className='w-50 m-auto my-3'
          >
            Back
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={continueClick}
            className='w-50 m-auto my-3'
          >
            Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default FormPersonalDetails;
