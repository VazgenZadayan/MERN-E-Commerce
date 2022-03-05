import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from 'store/actions/productActions';

import Fb from 'components/Fb';
import Loader from 'components/Loader';
import { useTranslations } from 'contexts/translation.context';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import useStyles from './styles';

const Slider = () => {
  const classes = useStyles();
  const { t, lang } = useTranslations();

  const [activeSlide, setActiveSlide] = useState(0);
  const [mouseOver, setMouseOver] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  const slidesCount = useMemo(() => products?.length, [products]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    const refreshIntervalId =
      mouseOver && setInterval(() => changeSlide('up'), 3000);
    return () => {
      clearInterval(refreshIntervalId);
    };
  });

  const changeSlide = (direction) => {
    setActiveSlide((prev) => {
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
          onMouseOver={() => setMouseOver(false)}
          onMouseOut={() => setMouseOver(true)}
          maxWidth='lg'
          m={0}
        >
          <Grid container className={classes.mainGrid}>
            <Grid
              item
              md={6}
              ml={4}
              className={classes.sidebar}
              style={{ transform: `translateY(-${activeSlide * 100}%)` }}
            >
              {loading ? (
                <Loader />
              ) : (
                products.map((product) => (
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
              md={5}
              mr={4}
              className={classes.mainSlide}
              style={{
                top: `-${(slidesCount - 1) * 100}%`,
                transform: `translateY(${activeSlide * 100}%)`,
              }}
            >
              {loading ? (
                <Loader />
              ) : (
                [...products].reverse().map((product) => (
                  <Fb
                    style={{ background: 'rgb(18,18,18)' }}
                    className={classes.mainSlideDiv}
                    key={product._id}
                    column
                    pt={8}
                    pr={5}
                    pl={7}
                  >
                    <Typography
                      color="primary"
                      style={{
                        fontSize: '18px',
                        fontFamily: 'Burn',
                        marginBottom: '40px',
                      }}
                    >
                      {product.brand}
                    </Typography>
                    <h1 className={classes.name}>{product.name}</h1>
                    <Typography
                      variant="p"
                      className={classes.description}
                      color="primary"
                    >
                      {product.description[lang]}
                    </Typography>
                    <Fb mb={5} mt={1}>
                      <Stack direction="row" spacing={1}>
                        <Chip label={`${product.type}`} variant="filled" />
                        <Chip label={`${product.weight}`} variant="filled" />
                      </Stack>
                    </Fb>
                    <Button
                      component={Link}
                      to={`/product/${product._id}`}
                      variant="link"
                      style={{ marginTop: '40px' }}
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
            className={classes.keydown}
            color="primary"
            fontSize="60px"
          />
        </Container>
      )}
    </>
  );
};

export default Slider;
