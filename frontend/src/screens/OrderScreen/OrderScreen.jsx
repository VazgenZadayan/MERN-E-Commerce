import React, { useEffect, useState } from 'react';

import { PayPalButton } from 'react-paypal-button-v2';

import { useSelector, useDispatch } from 'react-redux';

import { getOrderDetails, payOrder, deliverOrder } from 'store/actions/orderActions';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from 'store/constants/orderConstants';

import axios from 'axios';

import Fb from 'components/Fb';
import Loader from 'components/Loader';
import Message from 'components/Message';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import image from 'assets/detailBackground.jpg';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const OrderScreen = ({ match, history }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const orderId = match.params.id;
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading } = orderDetails;

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector(state => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    if(!userInfo) {
      history.push('/login')
    }
  })

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });

      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order, successDeliver]);

  const successPaymentHandler = paymentResult => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  }


  return (
    <Container
      md={12}
      className={classes.container}
      style={{
        background: `url(${image}) no-repeat center/cover`,
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Order: {order.id}</h1>
          <Grid item md={12}>
            <Typography style={{ textAlign: 'center', fontSize: '30px' }}>
              {t('place_order')}
            </Typography>
          </Grid>
          <Grid container justifyContent='space-around' pt={5}>
            <Grid item md={7} p={2} className={classes.formController}>
              <List sx={{ width: '100%', bgcolor: 'background.primary' }}>
                <Typography color='primary'>User: {order.user.name}</Typography>
                <Typography color='primary'>
                  {t('email_address')}: {order.user.email}
                </Typography>
                <Typography color='primary'>
                  {t('shipping')}: {order.shippingAddress.address},{' '}
                  {order.shippingAddress.city}, {order.shippingAddress.phone}
                </Typography>
                {order.isDelivered ? (
                  <Message variant='success'>
                    {t('delivered')}{order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant='danger'>Not Delivered</Message>
                )}
                <Divider color='primary' component='li' />
                <Typography color='primary'>
                  {t('payment')}: {order.paymentMethod}
                </Typography>
                {order.isPaid ? (
                  <Message variant='success'>{t('paid')}{order.paidAt}</Message>
                ) : (
                  <Message variant='danger'>{t('not_paid')}</Message>
                )}

                <Divider color='primary' component='li' />
                <Typography color='primary'>{t('ordered_items')}:</Typography>
                {order.orderItems.length === 0 ? (
                  <Message>{t('order_empty')}</Message>
                ) : (
                  <>
                    {order.orderItems.map((item, index) => (
                      <div key={index}>
                        <ListItem alignItems='center'>
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
                  {t('quantity')}: {order.orderItems.length}
                </Typography>
                <Divider style={{ background: '#e61cb34d' }} />
                <Typography
                  style={{ fontFamily: 'Copperplate', fontSize: '30px' }}
                >
                  {t('price')}: $ {order.itemsPrice}
                </Typography>
                <Divider style={{ background: '#e61cb34d' }} />
                <Typography
                  style={{ fontFamily: 'Copperplate', fontSize: '30px' }}
                >
                  {t('shipping')}: $ 1000
                </Typography>
                <Divider style={{ background: '#e61cb34d' }} />
                <Typography
                  style={{ fontFamily: 'Copperplate', fontSize: '30px' }}
                >
                  {t('total_price')}: {order.totalPrice}
                </Typography>
                <Divider style={{ background: '#e61cb34d' }} />
                {!order.isPaid && (
                  <div>
                    {loadingPay && <Loader />}
                    {!sdkReady ? (
                      <Loader />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    )}
                  </div>
                )}
                {loadingDeliver && <Loader/>}
              {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <Button
                  variant='link'
                  onClick={deliverHandler}
                >
                  {t('mark_as_delivered')}
                </Button>
              )}
              </Fb>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default OrderScreen;
