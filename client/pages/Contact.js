import React, { useState} from 'react';
import FormUserDetails from '../components/FormUserDetails';
import FormPersonalDetails from '../components/FormPersonalDetails';
import Confirm from '../components/Confirm';
import Success from '../components/Success';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    concern: ''
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  

  // Handle fields change
  const handleChange = input => e => {
    setUserDetails({ ...userDetails, [input]: e.target.value });
  };


  const values = { ...userDetails };

  switch (step) {
    case 1:
      return (
        
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
       
        />
       
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
         
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          

        />
      );
    case 4:
      return <Success />;
    default:
      console.log('This is a multi-step form built with React.');
      return null;
  }
  
};

export default UserForm;

