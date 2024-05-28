import React, { useState } from 'react';
import Stepper from '../common/reusable/stepper';
import SiteDetails from './SiteDetails';
import SiteAddress from './SiteAddress';
import EdgeDevice from './EdgeDevice';
import EmailNotification from './EmailNotification';
import { Grid, Button, Box, Card, CardContent } from '@mui/material';
import { useDispatch } from 'react-redux';
const CustomerForm = () => {
  // you will create four states, for holding data of each form 
  const [formOneData,setFormOneData]=useState({ siteName: "",
  description: "",
  file: null,})
  // send those state as props to the child component
  // on the click of next button
  const dispatch=useDispatch()
  const CHECKOUT_STEPS = [
    {
      name: 'Site details',
      Component: <SiteDetails setFormOneData={setFormOneData} formOneData={formOneData} />,
    },
    {
      name: 'Site address',
      Component: SiteAddress,
    },
    {
      name: 'Edge device',
      Component: EdgeDevice,
    },
    {
      name: 'email notification',
      Component: EmailNotification,
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === CHECKOUT_STEPS.length) {
        setIsComplete(true);
        return prevStep + 1;
      } else {
        return prevStep + 1;
      }
    });
dispatch(formOneData)
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 0) {
        return prevStep;
      } else {
        setIsComplete(false);
        return prevStep - 1;
      }
    });
  };

  const currentStepComponent = CHECKOUT_STEPS[currentStep - 1];

  return (
    <Card className='AddSiteCard' variant="outlined" sx={{ width: '100%',minWidth: 782, boxShadow: '0px 3px 6px rgba(0,0,0,0.16)', margin: 3,borderRadius: 1.5,
    '@media (max-width: 1441px)': {
   
      maxWidth: 782, // Adjust min width for 1440px and larger screens
      
    },
    '@media (min-width: 1441px)': {
   
      maxWidth: 1260, // Adjust min width for 1440px and larger screens
      
    },
  
      
     }}>
      <CardContent sx={{ padding:  2 }}>
        <Grid container direction="row" alignItems="flex-start" justify="center" height={{ xs: 'auto', md: 'auto', xl: '100%' }} spacing={{ xs: 2, md: 4, xl:8}}>
          <Grid item sx={{ gap: 0 }} p={0} width="730px" xs={12} md={12} lg={12} xl={12}>
           
            <h2 style={{ textAlign: "left" ,marginBottom: "0px" }}>Add Site</h2>
<div style={{ borderTop: "1px solid #BCBCBC",width:"100%" }}></div>

            <h3 style={{ textAlign: "left" }}>Customer Name</h3>
            <Stepper
              stepsConfig={CHECKOUT_STEPS}
              currentStep={currentStep}
              isComplete={isComplete}
              handleNext={handleNext}
              fontSize={{ xs: 14, md: 16, lg: 18 }}
              displaycolor="#1976d2"
              height="14"
            />
            <Box minHeight="500px">
              {currentStepComponent && <currentStepComponent.Component />}
            </Box>
          </Grid>

          <Grid item width="730px" xs={12} md={12} lg={12} xl={12}>
            <Grid container direction="row" alignItems="flex-start" justifyContent="flex-end">
              {!isComplete && currentStep > 1 && (
                <Button variant="outlined" onClick={handlePrev} sx={{ mr: 1 }}>
                  Back to {CHECKOUT_STEPS[currentStep - 2].name}
                </Button>
              )}
              {!isComplete && (
                <Button variant="contained" onClick={handleNext}>
                  {currentStep === CHECKOUT_STEPS.length ? 'Save Site' : `Proceed to ${CHECKOUT_STEPS[currentStep].name}`}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomerForm;
