import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from 'store/actions/cartActions';

import Fb from 'components/Fb';
import { useTranslations } from 'contexts/translation.context';

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

import useStyles from './styles';
import CustomSelect from 'components/Select/CustomSelect';

const CartScreen = ({ match, location, history }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleChange = (value, id) => {
    dispatch(addToCart(id, value));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };
  return (
    <Grid container justifyContent="space-around" className={classes.container}>
      <Grid item md={8}>
        {cartItems.length === 0 ? (
          <Typography className={classes.isEmpty} variant="h5">
            {t('cart_empty')}
          </Typography>
        ) : (
          <Fb className={classes.tableContainer}>
            <Table
              size="small"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">{t('label')}</TableCell>
                  <TableCell align="left">{t('weight')}</TableCell>
                  <TableCell align="left">{t('price')}</TableCell>
                  <TableCell align="left">{t('quantity')}</TableCell>
                  <TableCell align="left">{t('sum')}</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.product}>
                    <TableCell component="th" scope="row">
                      <img
                        src={item.image}
                        alt="product_image"
                        style={{ width: '90px', height: '90px' }}
                      />
                    </TableCell>
                    <TableCell align="left" padding="normal">
                      <Fb column>
                        <Typography
                          style={{ color: 'white', fontSize: '10px' }}
                        >
                          BlackBurn
                        </Typography>
                        <Typography>{item.name}</Typography>
                      </Fb>
                    </TableCell>
                    <TableCell align="left">200г</TableCell>
                    <TableCell align="left">{item.price}AMD</TableCell>
                    <TableCell align="left">
                      <CustomSelect
                        productCount={item.countInStock}
                        value={item.qty}
                        setValue={handleChange}
                        productId={item.product}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Typography>{`${item.price * item.qty} AMD`}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <IconButton
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <RestoreFromTrashIcon color="primary" />
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
        md={3}
        p={2}
        style={{
          background: 'rgb(18,18,18)',
          maxHeight: '70vh',
          borderRadius: '10px',
        }}
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
          <Divider style={{ background: '#1a1a1c', height: '3px' }} />
          <Typography
            style={{
              fontFamily: 'Copperplate',
              fontSize: '35px',
              textAlign: 'left',
            }}
          >
            {t('quantity')}:{' '}
            {cartItems.reduce((acc, item) => acc + item.qty, 0)}
          </Typography>
          <Divider style={{ background: '#1a1a1c', height: '3px' }} />

          <Typography style={{ fontFamily: 'Copperplate', fontSize: '30px' }}>
            {t('sum')}:
            {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}{' '}
            AMD
          </Typography>
          <Divider
            style={{ background: '#1a1a1c', height: '3px' }}
            variant="fullWidth"
          />
          <Fb column>
            <Button
              style={{
                width: '100%',
                marginBottom: '10px',
              }}
              type="button"
              variant="link"
              className="btn-block"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              {t('place_order')}
            </Button>
            <Button
              style={{
                width: '100%',
                background: '#1a1a1c',
              }}
              component={Link}
              variant="link"
              to="/"
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
