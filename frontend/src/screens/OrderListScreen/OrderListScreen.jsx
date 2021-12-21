import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from 'store/actions/orderActions';

import Loader from 'components/Loader';

import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';

import image from 'assets/detailBackground.jpg';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const OrderListScreen = ({ location, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const orderList = useSelector(state => state.orderList);
  const { loading, orders } = orderList;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo]);
 
  return (
    <Container
      md={12}
      className={classes.container}
      style={{ background: `url(${image}) no-repeat center/cover` }}
    >
      <Typography style={{ fontSize: '40px', textAlign: 'center' }}>
        {t('orders')}
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <Table size='small' sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>{t('name')}</TableCell>
              <TableCell align='center'>{t('date')}</TableCell>
              <TableCell align='center'>{t('total_price')}</TableCell>
              <TableCell align='center'>{t('paid')}</TableCell>
              <TableCell align='center'>{t('delivered')}</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order._id}>
                <TableCell align='center'>{order._id}</TableCell>
                <TableCell align='center'>
                  {order.user && order.user.name}
                </TableCell>
                <TableCell align='center'>{order.createdAt.substring(0, 10)}</TableCell>
                <TableCell align='center'>$ {order.price}</TableCell>

                <TableCell align='center'>{order.isPaid ? (
                  order.paidAt.substring(0, 10)
                ) : (
                  <i className='fas fa-times' style={{color: 'red'}}></i>
                )}
                </TableCell>
                <TableCell align='center'>{order.isDelivered ? (
                  order.deliveredAt.substring(0, 10)
                ) : (
                  <i className='fas fa-times' style={{color: 'red'}}></i>
                )}
                </TableCell>
                <TableCell align='center'>
                <Button
                    component={Link}
                    to={`/order/${order._id}`}
                    className='btn-sm'
                    variant='light'
                  >
                   {t('details')}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default OrderListScreen;
