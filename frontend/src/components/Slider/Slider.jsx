import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from 'store/actions/productActions';

import Fb from 'components/Fb';
import Loader from 'components/Loader';
import { useTranslations } from 'contexts/translation.context'

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import useStyles from './styles';

import image from '../../assets/detailBackground.jpg';

const Slider = () => {
  const classes = useStyles();
  const { t, lang } = useTranslations();
  
  const [activeSlide, setActiveSlide] = useState(0);
  const [mouseOver, setMouseOver] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.productList);
  const slidesCount = useMemo(() => products?.length, [products]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    const refreshIntervalId = mouseOver && setInterval(() => changeSlide('up'), 3000);
    return () => {
      clearInterval(refreshIntervalId);
    };
  });

  const changeSlide = direction => {
    setActiveSlide(prev => {
      if (direction === 'up') {
        return prev >= slidesCount - 1 ? 0 : prev + 1;
      } else if (direction === 'down') {
        return prev === 0 ? slidesCount - 1 : prev - 1;
      }
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: 720,
      behavior: 'smooth',
    });
  };
  
  return (
    <>
      {error ? null : (
        <Container
          className={classes.container}
          style={{ background: `url(${image}) no-repeat center/cover fixed` }}
          onMouseOver={() => setMouseOver(false)}
          onMouseOut={() => setMouseOver(true)}
        >
          <Grid container className={classes.mainGrid}>
            <Grid
              item
              md={4}
              ml={2}
              className={classes.sidebar}
              style={{ transform: `translateY(-${activeSlide * 100}%)` }}
            >
              {loading ? (
                <Loader />
              ) : (
                products.map(product => (
                  <div
                    className={classes.sideBarDiv}
                    key={product._id}
                    style={{
                      background: `url(${product.image}) no-repeat center/cover`,
                    }}
                  />
                ))
              )}
            </Grid>
            <Grid
              item
              md={8}
              className={classes.mainSlide}
              style={{
                top: `-${(slidesCount - 1) * 100}%`,
                transform: `translateY(${activeSlide * 100}%)`,
              }}
            >
              {loading ? (
                <Loader />
              ) : (
                [...products].reverse().map(product => (
                  <Fb
                    style={{ background: 'rgba(39,41,50, 0.30)' }}
                    className={classes.mainSlideDiv}
                    key={product._id}
                    column
                    pt={4}
                    pr={16}
                    pl={7}
                  >
                    <Typography
                      color='primary'
                      style={{
                        fontSize: '18px',
                        fontFamily: 'Burn',
                      }}
                    >
                      {product.brand}
                    </Typography>
                    <h1
                      className={classes.name}
                    >
                      {product.name}
                    </h1>
                    <Typography variant='p' className={classes.description} color='primary'>
                      {product.description[lang]}
                    </Typography>
                    <Fb mb={5} mt={1}>
                      <Stack direction='row' spacing={1}>
                        <Chip
                          label={`${product.type}`}
                          variant='filled'
                        />
                        <Chip
                          label={`${product.weight}`}
                          variant='filled'
                        />
                      </Stack>
                    </Fb>
                    <Button
                      component={Link}
                      to={`/product/${product._id}`}
                      variant='link'
                    >
                      {t('see_more')}
                    </Button>
                  </Fb>
                ))
              )}
            </Grid>
          </Grid>
          <KeyboardArrowDownIcon
            onClick={scrollDown}
            style={{
              fontSize: '60px',
              margin: '0 auto',
              display: 'block',
              cursor: 'pointer',
            }}
            color='primary'
          />
        </Container>
      )}
    </>
  );
};

export default Slider;
