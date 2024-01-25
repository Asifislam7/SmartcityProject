import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import 'animate.css'

import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, concern }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='md'
            style={{height:'75vh', fontSize:'40px'}}
            className='animate__animated animate__fadeInDown w-75 m-auto'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName}  />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Concern" secondary={concern} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              className='w-50 m-auto my-3'

            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              className='w-50 m-auto my-3'
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

// const {
//   values: { firstName, lastName, email, occupation, city, concern }
// } = this.props;

// this is is equivalent to the code below. this is the destructuring of the prop values 
// used in the class component whose name is values and it has certain key value pairs in them like firtsname ,lastname
// we are fetchin this info

// const values = this.props.values;
// const firstName = values.firstName;
// const lastName = values.lastName;
// const email = values.email;
// const occupation = values.occupation;
// const city = values.city;
// const concern = values.concern;

export default Confirm;