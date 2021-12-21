import React from 'react';

import { useDispatch } from 'react-redux';

import Fb from 'components/Fb';

import Loader from 'components/Loader';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

import { addToCart } from 'store/actions/cartActions';

const ProductCart = ({ product, loading }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  }
  return (
    <Grid item md={3} className={classes.cartSection}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <img src={product.image} alt="Product" className={classes.imageHolder}/>
          <Fb
            py={2}
            justifyBetween
            alignLeft
            column
          >
            <Typography
              color='primary'
              className={classes.name}
            >
              {product.name}
            </Typography>
            {product.countInStock > 0 ? (
              <h1
                className={classes.price}
              >
                {`${product.price} AMD`}
              </h1>
            ) : (
              'Out of Stock'
            )}
            <Button
              variant='link'
              onClick={addToCartHandler}
              className={classes.addToCart}
            >
                {t('add_to_cart_btn')}
            </Button>
          </Fb>
        </>
      )}
    </Grid>
  );
};

export default ProductCart;
