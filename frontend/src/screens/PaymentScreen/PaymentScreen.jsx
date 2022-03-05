import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from 'store/actions/cartActions';

import CheckoutSteps from 'components/CheckoutSteps/CheckoutSteps';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const PaymentScreen = ({ history }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const dispatch = useDispatch();
  
  if (!shippingAddress) {
    history.push('/shipping');
  }

  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };
  return (
    <Grid
      container
      className={classes.container}
    >
      <Container maxWidth='md'>
        <Typography style={{ textAlign: 'center', fontSize: '30px' }}>
          {t('payment')}
        </Typography>
        <CheckoutSteps step1 step2 step3 />
      </Container>
      <Container
        component='main'
        maxWidth='xs'
        className={classes.formController}
      >
        <Box
          component='form'
          onSubmit={submitHandler}
          noValidate
          color='primary'
          sx={{ mt: 3 }}
        >
          <FormLabel component='legend'>{t('payment_method')}</FormLabel>
          <RadioGroup
            row
            aria-label='paymentMethod'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='Credit Card'
              control={<Radio />}
              label={t('credit_card')}
              checked={paymentMethod === 'Credit Card'}
              onClick={e => setPaymentMethod(e.target.value)}
              id='CreditCard'
            />
            <FormControlLabel
              value='Cash'
              control={<Radio />}
              label={t('cash')}
              id='Cash'
              onClick={e => setPaymentMethod(e.target.value)}
            />
          </RadioGroup>
          <Button
            type='submit'
            fullWidth
            variant='link'
            style={{ width: '100%' }}
          >
            {t('continue')}
          </Button>
        </Box>
      </Container>
    </Grid>
  );
};

export default PaymentScreen;
