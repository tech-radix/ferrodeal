import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./frontpage.css"
import { Link } from 'react-router-dom';





const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
  
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Avalibality.png',
  },
  {
 
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Quality.png',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Allmaterial2.png',
  },
 
  {
  
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Flexible.png',
  },
  {
   
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/TRACK_ORDER%20final.png',
  },

  {
   
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/lowestfinal.png',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Nominquantity.png',
  },
  {
  
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Transporter3.png',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/Nojoining2.png',
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep]  = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
   
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <section className='content'>
    <center><div className="head_icon"> </div></center>
    <Box sx={{ maxWidth: 400, flexGrow: 1, margin:"auto" }}  >
   
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
       
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
            
                  
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
 
      
   
        activeStep={activeStep}
        nextButton={
          <Button
           
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
        
          <Button size="small"   onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight 

                
              />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>

    <center><Link to="/home"><button className="btn_1">Login</button></Link>

<br></br>
<br></br>


<button className="btn_2">sign up</button>


</center>
</section>
    </>
  );
}

export default SwipeableTextMobileStepper;
