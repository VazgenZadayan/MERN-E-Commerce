import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Fb from 'components/Fb';
import Meta from 'components/Meta'
import Loader from 'components/Loader';
import { useTranslations } from 'contexts/translation.context'

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {
  listProductDetails,
} from 'store/actions/productActions';
import { addToCart } from 'store/actions/cartActions';

import useStyles from './styles';

import image from 'assets/detailBackground.jpg';

const ProductDetailSection = ({ history, match }) => {
  const classes = useStyles();
  const { t, lang } = useTranslations();
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, product } = productDetails;

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(match.params.id, qty));
  };

  return (
    <>
      <Button
        component={Link}
        variant='link'
        to='/'
        style={{ top: '100px', left: '104px' }}
      >
        {t('go_back')}
      </Button>
      <Grid
        container
        justifyContent='space-around'
        style={{
          background: `url(${image}) no-repeat center/cover`,
          height: '100vh',
          padding: '120px 80px',
        }}
      >
          <Meta title={product.name}/>
            <Grid md={6} item className={classes.details}>
              {loading ? <Loader /> : (
                <>
                <span className={classes.brand}>{product.brand}</span>
                <h2 className={classes.title}>{product.name}</h2>
                <p className={classes.description}>{product.description && product.description[lang]}</p>
                <Fb mb={5} mt={1}>
                  <Stack direction='row' spacing={1}>
                    <Chip label={`${product.type}`} variant='filled' />
                    <Chip label={`${product.weight}`} variant='filled' />
                  </Stack>
                </Fb>
                <Fb alignCenter>
                  <Button
                    variant='link'
                    disabled={product?.countInStock < 1}
                    onClick={addToCartHandler}
                    style={{ marginRight: '20px' }}
                  >
                    {t('add_to_cart_btn')}
                  </Button>
                  {product.countInStock > 0 ? (
                    <div>
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
                        value={qty}
                        onChange={e => setQty(e.target.value)}
                        className={classes.select}
                      >
                        {[...Array(product.countInStock).keys()].map(x => (
                          <MenuItem value={x + 1} key={x + 1}>
                            <p>{x + 1}</p>
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  ) : (
                    'Out of Stock'
                  )}
                </Fb>
              
                </>)}
            </Grid>
            <Grid item md={5}>
              {loading ? <Loader/> : (
                <div
                style={{
                  background: `url(${product.image}) no-repeat center/cover`,
                  width: '100%',
                  height: '100%',
                }}
              ></div>
              )}
            </Grid>
      </Grid>
    </>
  );
};

export default ProductDetailSection;
