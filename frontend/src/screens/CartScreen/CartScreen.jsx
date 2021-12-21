import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from 'store/actions/cartActions';

import Fb from 'components/Fb';
import { useTranslations } from 'contexts/translation.context'

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

import image from 'assets/detailBackground.jpg';

import useStyles from './styles';

const CartScreen = ({ match, location, history }) => {
  const classes = useStyles();
  const { t } = useTranslations();
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };
  return (
    <Grid
      container
      justifyContent='space-around'
      className={classes.container}
      style={{ background: `url(${image}) no-repeat center/cover` }}
    >
      <Grid item md={7}>
        {cartItems.length === 0 ? (
          <Typography className={classes.isEmpty}>
            {t('cart_empty')}
          </Typography>
        ) : (
          <Fb className={classes.tableContainer}>
            <Table
              size='small'
              sx={{ minWidth: 650 }}
              aria-label='simple table'
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align='left'>{t('label')}</TableCell>
                  <TableCell align='left'>{t('weight')}</TableCell>
                  <TableCell align='left'>{t('price')}</TableCell>
                  <TableCell align='left'>{t('quantity')}</TableCell>
                  <TableCell align='left'>{t('sum')}</TableCell>
                  <TableCell align='left'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map(item => (
                  <TableRow key={item.product}>
                    <TableCell component='th' scope='row'>
                      <img
                        src={item.image}
                        alt='product_image'
                        style={{ width: '90px', height: '90px' }}
                      />
                    </TableCell>
                    <TableCell align='left' padding='normal'>
                      <Fb column>
                        <Typography
                          style={{ color: 'white', fontSize: '10px' }}
                        >
                          BlackBurn
                        </Typography>
                        <Typography>{item.name}</Typography>
                      </Fb>
                    </TableCell>
                    <TableCell align='left'>200г</TableCell>
                    <TableCell align='left'>{item.price}AMD</TableCell>
                    <TableCell align='left'>
                      <Select
                        variant='filled'
                        labelId='demo-simple-select-label'
                        style={{
                          color: 'white',
                          background: 'rgb(145 145 145 / 21%)',
                          height: '35px',
                          width: '70px',
                          borderRadius: '0',
                        }}
                        id='demo-simple-select'
                        value={item.qty}
                        onChange={e =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map(x => (
                          <MenuItem
                            value={x + 1}
                            key={x + 1}
                            style={{ color: 'black', borderRadius: '0' }}
                          >
                            <p>{x + 1}</p>
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography>
                        {`${item.price * item.qty} AMD`}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <IconButton
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <RestoreFromTrashIcon color='primary' />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Fb>
        )}
      </Grid>
      <Grid
        item
        md={4}
        p={2}
        style={{ background: 'rgb(145 145 145 / 21%)', maxHeight: '70vh' }}
      >
        <Fb column justifyAround style={{ height: '100%' }}>
          <h1
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Copperplate',
              fontSize: '40px',
            }}
          >
            {t('cart')}
          </h1>
          <Divider style={{ background: '#e61cb34d' }} />
          <Typography
            style={{
              fontFamily: 'Copperplate',
              fontSize: '35px',
              textAlign: 'left',
            }}
          >
            {t('quantity')}: {cartItems.reduce((acc, item) => acc + item.qty, 0)}
          </Typography>
          <Divider style={{ background: '#e61cb34d' }} />

          <Typography style={{ fontFamily: 'Copperplate', fontSize: '30px' }}>
            {t('sum')}: 
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              } AMD
          </Typography>
          <Divider style={{ background: '#e61cb34d' }} />

          <Fb column>
            <Button
              style={{
                width: '100%',
                background: '#e61cb34d',
                marginBottom: '10px',
              }}
              type='button'
              variant='link'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              {t('place_order')}
            </Button>
            <Button
              style={{ width: '100%' }}
              component={Link}
              variant='link'
              to='/'
            >
              {t('back_to_buy')}
            </Button>
          </Fb>
        </Fb>
      </Grid>
    </Grid>
  );
};

export default CartScreen;
