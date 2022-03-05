import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Fb from 'components/Fb';
import Meta from 'components/Meta';
import Loader from 'components/Loader';
import { useTranslations } from 'contexts/translation.context';

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { listProductDetails } from 'store/actions/productActions';
import { addToCart } from 'store/actions/cartActions';

import useStyles from './styles';
import { Container } from '@mui/material';
import CustomSelect from 'components/Select/CustomSelect';

const ProductDetailSection = ({ match }) => {
  const productId = match.params.id;
  const classes = useStyles();
  const { t, lang } = useTranslations();
  const [qty, setQty] = useState(1);
  
  const setQuantity = (value) => {
    setQty(value);
  };

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;

  useEffect(() => {
    if (!product._id || product._id !== productId) {
      dispatch(listProductDetails(productId));
    }
  }, [dispatch, productId, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, qty));
  };

  return (
    <>
      <Container className={classes.container} maxWidth="lg" m={0}>
        <Meta title={product.name} />
        <Grid container className={classes.mainGrid} spacing={12}>
          <Grid item md={6}>
            {loading ? (
              <Loader />
            ) : (
              <Fb
                style={{ background: 'rgb(18,18,18)' }}
                className={classes.descriptionBlock}
                key={product._id}
                column
                p={8}
              >
                <span className={classes.brand}>{product.brand}</span>
                <h2 className={classes.title}>{product.name}</h2>
                <p className={classes.description}>
                  {product.description && product.description[lang]}
                </p>
                <Fb mb={5} mt={1}>
                  <Stack direction="row" spacing={1}>
                    <Chip label={`${product.type}`} variant="filled" />
                    <Chip label={`${product.weight}`} variant="filled" />
                  </Stack>
                </Fb>
                <Fb justifyBetween>
                  <Button
                    variant="link"
                    disabled={product?.countInStock < 1}
                    onClick={addToCartHandler}
                    style={{ marginRight: '20px' }}
                  >
                    {t('add_to_cart_btn')}
                  </Button>
                  <Button component={Link} variant="text" to="/">
                    {t('go_back')}
                  </Button>
                </Fb>
                {product.countInStock > 0 ? (
                  <CustomSelect
                    productCount={product.countInStock}
                    value={qty}
                    setValue={setQuantity}
                  />
                ) : (
                  'Out of Stock'
                )}
              </Fb>
            )}
          </Grid>
          <Grid item md={6}>
            {loading ? (
              <Loader />
            ) : (
              <div
                style={{
                  background: `url(${product.image}) no-repeat center/cover`,
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                }}
              ></div>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetailSection;
