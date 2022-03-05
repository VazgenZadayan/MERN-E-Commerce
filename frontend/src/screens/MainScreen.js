import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../components/Meta';
import { listProducts } from '../store/actions/productActions';

import Slider from 'components/Slider/Slider';
import ProductsListScreen from './ProductsListScreen/ProductsListScreen';
import ModalComponent from 'components/Modal/ModalComponent';

const MainScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <ModalComponent />
      <Meta />
      <Slider />
      <ProductsListScreen products={products} loading={loading} />
    </>
  );
};

export default MainScreen;
