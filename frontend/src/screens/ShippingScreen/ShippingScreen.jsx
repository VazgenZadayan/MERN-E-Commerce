import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from 'store/actions/cartActions';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckoutSteps from 'components/CheckoutSteps/CheckoutSteps';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const ShippingScreen = ({ history }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, phone }));
    history.push('/payment');
  };
  return (
    <Grid
      container
      className={classes.container}
    >
      <Container maxWidth='md'>
        <Typography style={{ textAlign: 'center', fontSize: '30px' }}>
          {t('shipping')}
        </Typography>
        <CheckoutSteps step1 step2 />
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
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='address'
            label={t('address')}
            name='address'
            autoComplete='address'
            autoFocus
            type='text'
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='city'
            label={t('city')}
            type='text'
            color='primary'
            id='city'
            value={city}
            onChange={e => setCity(e.target.value)}
            autoComplete='current-password'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='phone'
            label={t('phone_number')}
            type='text'
            color='primary'
            id='phone'
            value={phone}
            onChange={e => setPhone(e.target.value)}
            autoComplete='current-password'
          />
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

export default ShippingScreen;
