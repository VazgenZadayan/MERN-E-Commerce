import React, { useEffect } from 'react';

import { createOrder } from 'store/actions/orderActions';
import { useSelector, useDispatch } from 'react-redux';

import Fb from 'components/Fb';
import Message from 'components/Message';
import CheckoutSteps from 'components/CheckoutSteps/CheckoutSteps';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const PlaceOrder = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const cart = useSelector(state => state.cart);
  // Calculate prices
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.shippingPrice = 1000;
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  );


  const orderCreate = useSelector(state => state.orderCreate);
  const { order, success } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemPrice: cart.itemPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <Container
      md={12}
      className={classes.container}
    >
      <Grid item md={12}>
        <Typography style={{ textAlign: 'center', fontSize: '30px' }}>
          {t('place_order')}
        </Typography>
        <CheckoutSteps step1 step2 step3 step4 />
      </Grid>
      <Grid container justifyContent='space-around' pt={5}>
        <Grid item md={7} p={2} className={classes.formController}>
          <List sx={{ width: '100%', bgcolor: 'background.primary' }}>
            <Typography color='primary'>
              {t('shipping')}: {cart.shippingAddress.address},{' '}
              {cart.shippingAddress.city}, {cart.shippingAddress.phone}
            </Typography>
            <Divider color='primary' component='li' />
            <Typography color='primary'>
              {t('payment_method')}: {cart.paymentMethod}
            </Typography>

            <Divider color='primary' component='li' />
            <Typography color='primary'>{t('ordered_items')}:</Typography>
            {cart.cartItems.length === 0 ? (
              <Message>{t('cart_empty')}</Message>
            ) : (
              <>
                {cart.cartItems.map((item, index) => (
                  <div key={index}>
                    <ListItem alignItems='center' key={index}>
                      <ListItemAvatar>
                        <Avatar
                          style={{ width: '50px', height: '50px' }}
                          alt='productImage'
                          src={`${item.image}`}
                        />
                      </ListItemAvatar>
                      <ListItemText>{item.name}</ListItemText>
                      <ListItemText
                        style={{ right: '0', position: 'absolute' }}
                      >
                        {item.qty}x${item.price} = ${item.qty * item.price}
                      </ListItemText>
                    </ListItem>
                    <Divider color='primary' component='li' />
                  </div>
                ))}
              </>
            )}
          </List>
        </Grid>
        <Grid className={classes.formController} item md={4} p={3}>
          <Fb column justifyAround style={{ height: '100%' }}>
            <h1
              style={{
                color: 'white',
                textAlign: 'center',

                fontSize: '20px',
              }}
            >
              {t('total_price')}
            </h1>
            <Divider style={{ background: '#e61cb34d' }} />
            <Typography
              style={{
                fontSize: '20px',
                textAlign: 'left',
              }}
            >
              {t('quantity')}: {cart.cartItems.length}
            </Typography>
            <Divider style={{ background: '#e61cb34d' }} />
            <Typography style={{ fontFamily: 'Copperplate', fontSize: '30px' }}>
              {t('price')}: $ {cart.itemsPrice}
            </Typography>
            <Divider style={{ background: '#e61cb34d' }} />
            <Typography style={{ fontFamily: 'Copperplate', fontSize: '30px' }}>
              {t('shipping')}: $ 1000
            </Typography>
            <Divider style={{ background: '#e61cb34d' }} />
            <Typography style={{ fontFamily: 'Copperplate', fontSize: '30px' }}>
              {t('total_price')}: {cart.totalPrice}
            </Typography>
            <Divider style={{ background: '#e61cb34d' }} />
            <Button
              style={{
                width: '100%',
                background: '#e61cb34d',
                marginBottom: '10px',
              }}
              type='button'
              variant='link'
              className='btn-block'
              onClick={placeOrderHandler}
            >
              {t('place_order')}
            </Button>
          </Fb>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlaceOrder;
