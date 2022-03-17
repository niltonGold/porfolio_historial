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

import webResponsive_imagen1 from '../images_webresponsive/cards_giratorios.jpg';
import webResponsive_imagen2 from '../images_webresponsive/tablero_giratorio.jpg';
import webResponsive_imagen3 from '../images_webresponsive/formulario_responsive.jpg';

import './style.css';




    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



    const images = [

      {
        label: 'Cards giratorios ',
        imgPath:
        webResponsive_imagen1,
      },

      {
        label: 'Tablero giratorio',
        imgPath:
        webResponsive_imagen2,
      },
      
      {
        label: 'Formulario con responsive',
        imgPath:
        webResponsive_imagen3,
      },

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
    
    <Box sx={{ alignSelf:'center', maxWidth: 600, flexGrow: 1, pl:'0.5rem', pr:'0.5rem' }}>
      

          <Paper  square  elevation={0}  sx={{ alignItems: 'center',  height: 40 }}>

            <Typography sx={{ fontSize:{xs:'x-small', md:'medium' }, pt:'0.7rem',textAlign:'center', justifyContent:'center', alignSelf:'center',  fontSize:{ xs:'x-small', md:'large' }  }} >
                {images[activeStep].label}  
            </Typography>

          </Paper>
        

          <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}  index={activeStep}  onChangeIndex={handleStepChange}  enableMouseEvents  >

                {images.map((step, index) => (
                    <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            <Box  component="img"  sx={{ height: '50%',  display: 'block', maxWidth: 600,  overflow: 'hidden',  width: '100%'  }} src={step.imgPath}  alt={step.label} />
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