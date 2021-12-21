import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Button from '@mui/material/Button';
import Meta from '../components/Meta'
import { listProducts } from '../store/actions/productActions'

import Slider from 'components/Slider/Slider'
import ProductsListScreen from './ProductsListScreen/ProductsListScreen'
import ModalComponent from 'components/Modal/ModalComponent';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword]);

  return (
    <>
      <ModalComponent />
      <Meta />
      {!keyword ? (
        <Slider/>
      ) : (
        <Button variant='link'>
          Go back
        </Button>
      )}
      {loading ? (
        <Loader />
      ) : error ? ( 
        <h1 variant='danger'>{error}</h1>
      ) : (
        <ProductsListScreen products={products} loading={loading}/>
      )}
    </>
  )
}

export default HomeScreen;

