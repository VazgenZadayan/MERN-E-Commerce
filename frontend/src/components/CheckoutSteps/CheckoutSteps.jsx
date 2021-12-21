import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'contexts/translation.context';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { t } = useTranslations();
  return (
    <Box>
      <Stepper activeStep={-1}>
        <Step completed={step1}>
          <StepLabel>
            <Typography component={Link} color='primary' to='/login'>
              {t('sign_in')}
            </Typography>
          </StepLabel>
        </Step>
        <Step completed={step2}>
          <StepLabel>
            <Typography color='primary' to='/shipping'>
              {t('shipping')}
            </Typography>
          </StepLabel>
        </Step>
        <Step completed={step3}>
          <StepLabel>
            <Typography color='primary' to='/payment'>
              {t('payment')}
            </Typography>
          </StepLabel>
        </Step>
        <Step completed={step4}>
          <StepLabel>
            <Typography color='primary' to='/placeorder'>
              {t('place_order')}
            </Typography>
          </StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};

export default CheckoutSteps;
