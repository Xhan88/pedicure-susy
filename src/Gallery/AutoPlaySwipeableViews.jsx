import '../Gallery/AutoPlaySwipeableViews.css'

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
import { CenterFocusStrong } from '@mui/icons-material';
import TextGallery from './TextGallery';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images =  [
  {
    label: 'Acripie',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2FWhatsApp%20Image%202023-04-04%20at%2011.48.52%20PM.jpeg?alt=media&token=eedb4b34-85f5-4eb7-8bc2-2cb97adaef62',
  },
  {
    label: 'Diseños personalizados',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2FWhatsApp%20Image%202023-04-04%20at%2011.48.52%20PM%20(2).jpeg?alt=media&token=dd48d009-4a04-4b7a-b958-ae15d430e40c',
  },
  {
    label: 'Hidratacion',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2FWhatsApp%20Image%202023-04-04%20at%2011.48.52%20PM%20(1).jpeg?alt=media&token=0c28c91e-97fa-422f-ad2d-ab26be0c24af',
  },
  {
    label: 'Exfoliacion',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/pictures-feet%2FWhatsApp%20Image%202023-04-04%20at%2011.48.51%20PM%20(4).jpeg?alt=media&token=c202bbc4-f983-4f60-ae8d-8e4b9b9dd822',
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
    <Box className='box' sx={{ maxWidth: 400, flexGrow: 3 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 50,
          height: 50,
          pl: 20,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
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
                  borderRadius: 5,
                  height: 400,
                  display: 'block',
                  maxWidth: 600,
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <TextGallery />
    </Box>
    
  );
  <hr />
}



export default SwipeableTextMobileStepper;