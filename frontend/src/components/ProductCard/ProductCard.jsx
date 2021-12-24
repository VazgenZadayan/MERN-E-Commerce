import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Fb from 'components/Fb';

import Loader from 'components/Loader';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

import { addToCart } from 'store/actions/cartActions';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

const ProductCart = ({ product, loading }) => {
  const { t } = useTranslations();

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  };
  return (
    <Grid md={4} lg={3} xs={10} sm={6} item>
      {loading ? (
        <Loader />
      ) : (
        <Card style={{ background: 'transparent', padding: '0' }}>
          <CardMedia
            component='img'
            height='100%'
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Fb alignCenter justifyBetween>
              <Typography variant='h5'>{product.name}</Typography>
              <Typography component='span'>
                {product.countInStock > 0
                  ? `${product.price} AMD`
                  : 'Out of Stock'}
              </Typography>
            </Fb>
          </CardContent>
          <CardActions style={{ padding: '0' }}>
            <Button
              variant='link'
              onClick={addToCartHandler}
              color='primary'
              style={{ width: '100%' }}
            >
              {t('add_to_cart_btn')}
            </Button>
          </CardActions>
        </Card>
      )}
    </Grid>
  );
};

export default ProductCart;
