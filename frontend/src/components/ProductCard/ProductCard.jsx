import React from 'react';

import { useDispatch } from 'react-redux';

import Loader from 'components/Loader';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

import { addToCart } from 'store/actions/cartActions';

const ProductCart = ({ product, loading }) => {
  const classes = useStyles();
  const { t, lang } = useTranslations();

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  };
  return (
    <Grid md={4} lg={3} xs={10} sm={6} item>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.card}>
          <img
            src={product.image}
            alt={product.name}
            className={classes.media}
          />
          <div className={classes.info}>
            <h4 className={classes.price}>{product.price} $</h4>
            <Typography variant='h4'>{product.name}</Typography>
            <p className={classes.description}>
              {product?.description[lang]}
            </p>
            <Button
              className={classes.btn}
              onClick={addToCartHandler}
              variant='link'
            >
              {t('add_to_cart_btn')}
            </Button>
          </div>
        </div>
      )}
    </Grid>
  );
};

export default ProductCart;
