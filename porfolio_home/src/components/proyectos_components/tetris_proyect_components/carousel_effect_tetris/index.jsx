import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


import tetris from '../../../../images/tetris.jpg';
import tetris2 from '../../../../images/tetris2.jpg';
import tetris3 from '../../../../images/tetris3.jpg';
import { Stack } from '@mui/material';
import './style.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const images = [
  {
    label: 'principal',
    imgPath:
      tetris,
  },
  {
    label: 'Score',
    imgPath:
      tetris2,
  },
  {
    label: 'Final',
    imgPath:
      tetris3,
  },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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
    <Box sx={{ alignSelf:'center', maxWidth: 600, flexGrow: 1 }}>
      
      
      {/* <Paper  square  elevation={0}  sx={{ display: 'flex',  alignItems: 'center',  height: 30,  pl: 2,  bgcolor: 'background.default',  }}  > */}


      {/* <Paper  square  elevation={0}  sx={{  alignItems: 'center',  height: 30,  pl: 2,  bgcolor: 'background.default',  }}> */}
      <Paper  square  elevation={0}  sx={{  alignItems: 'center',  height: 30,  pl: 2 }}>
        <Typography>  {images[activeStep].label}  </Typography>
      </Paper>
     

      <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}  index={activeStep}  onChangeIndex={handleStepChange}  enableMouseEvents  >
            {images.map((step, index) => (
                <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box  component="img"  sx={{ height: '50%',  display: 'block',  maxWidth: 600,  overflow: 'hidden',  width: '100%',  }} src={step.imgPath}  alt={step.label} />
                      ) : null}
                </div>
            ))}
      </AutoPlaySwipeableViews>


      <MobileStepper  steps={maxSteps}  position="static"  activeStep={activeStep} 
              nextButton={
                  <Button sx={{  fontSize:{ xs:'x-small', md:'large' }  }}  size="small"  onClick={handleNext}  disabled={activeStep === maxSteps - 1}  >
                      Next
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                  </Button>
              }

              backButton={
                  <Button sx={{  fontSize:{ xs:'x-small', md:'large' }  }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                  </Button>
              }
      />
      

    </Box>
  );
}

export default SwipeableTextMobileStepper;