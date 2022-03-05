import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_UPDATE_RESET } from 'store/constants/productConstants';
import { listProductDetails, updateProduct } from 'store/actions/productActions';

import Loader from 'components/Loader';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import axios from 'axios';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const ProductEditScreen = ({ match, history }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const productId = match.params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, product } = productDetails;

  const productUpdate = useSelector(state => state.productUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/admin/productList');
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
        setType(product.type)
        setWeight(product.weight)
      }
    }
  }, [product, dispatch, productId, history, successUpdate]);

  const uploadFileHandler = async e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);
    try {
      const config = {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      };
      const { data } = await axios.post(
        '/api/upload',
        formData,
        config
      );
      setImage(data)
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
        type,
        weight,
      })
    );
  };

  return (
    <Container
      className={classes.container}
    >
      <Container
        component='main'
        maxWidth='xs'
        className={classes.formController}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ bgcolor: 'secondary.main', borderRadius: '0' }}
            className={classes.logo}
          >
            <LockOutlinedIcon />
          </Avatar>
          <h3 className={classes.title}>{t('edit')}</h3>
          {loadingUpdate && <Loader />}
          {loading ? (
            <Loader />
          ) : (
            <Box component='form' noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    label={t('name')}
                    type='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='price'
                    label={t('price')}
                    type='number'
                    name='price'
                    autoComplete='price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {uploading ? <Loader /> : (
                    <label htmlFor='contained-button-file'>
                    <Input
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <Button
                    variant='contained'
                    component='span'
                    onClick={uploadFileHandler}
                    >
                      {t('upload')}
                    </Button>
                  </label>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='brand'
                    label={t('brand')}
                    type='text'
                    name='brand'
                    autoComplete='brand'
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='countInStock'
                    label={t('count_in_stock')}
                    type='number'
                    name='countInStock'
                    autoComplete='countInStock'
                    value={countInStock}
                    onChange={e => setCountInStock(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='category'
                    label={t('category')}
                    type='text'
                    name='category'
                    autoComplete='category'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='type'
                    label={t('type')}
                    type='text'
                    name='type'
                    autoComplete='type'
                    value={type}
                    onChange={e => setType(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='weight'
                    label={t('weight')}
                    type='text'
                    name='weight'
                    autoComplete='weight'
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='description'
                    label={t('description')}
                    type='text'
                    name='description'
                    autoComplete='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                onClick={submitHandler}
                variant='link'
                style={{ width: '100%', marginTop: '30px' }}
              >
                {t('update')}
              </Button>
              <Button
                fullWidth
                variant='link'
                component={Link}
                to='/admin/productList'
                style={{ width: '100%', marginTop: '30px' }}
              >
                {t('go_back')}
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Container>
  );
};

export default ProductEditScreen;
