import React, { useState } from 'react';

import sortProducts from 'utils/helpers';

import ProductCart from 'components/ProductCard/ProductCard';

import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';
import Loader from 'components/Loader';

const ProductsListScreen = ({ products, loading }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const [brand, setBrand] = useState(0);
  const sortedProducts = sortProducts(products);
  const productsEntries = Object.entries(sortedProducts);
  const handleChange = (_, index) => {
    setBrand(index);
  };

  if(!productsEntries.length) return null;

  return (
    <Container className={classes.container} disableGutters>
          <p className={classes.catalog}>{t('catalog')}</p>
          <Tabs
            value={brand}
            indicatorColor='primary'
            variant='scrollable'
            textColor='primary'
            scrollButtons
            allowScrollButtonsMobile
            onChange={handleChange}
            className={classes.tabs}
          >
            {productsEntries?.map(([key]) => (
              <Tab component='span' key={key} id={key} icon={key} />
            ))}
          </Tabs>
          <Grid
            container
            spacing={4}
            p={4}
            mt={2}
            justifyContent='center'
            alignItems='top'
          >
            {productsEntries[brand][1].map(product => (
              <ProductCart
                product={product}
                key={product._id}
                loading={loading}
              />
            ))}
          </Grid>
    </Container>
  );
};

export default ProductsListScreen;
