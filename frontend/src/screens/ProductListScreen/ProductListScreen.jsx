import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import Container from '@mui/material/Container';
import { useTranslations } from 'contexts/translation.context';

import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import {
  listProducts,
  deleteProduct,
  createProduct,
} from 'store/actions/productActions';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { PRODUCT_CREATE_RESET } from 'store/constants/productConstants';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

const ProductListScreen = ({ match, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, success: successDelete } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push('/login');
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <Container md={12} className={classes.container}>
      <Typography style={{ fontSize: '40px', textAlign: 'center' }}>
        {t('products')}
      </Typography>
      <Button variant="link" onClick={createProductHandler}>
        {t('create_product')}
      </Button>
      {loadingDelete && <Loader />}
      {loadingCreate && <Loader />}
      {loading ? (
        <Loader />
      ) : (
        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">{t('label')}</TableCell>
              <TableCell align="center">{t('price')}</TableCell>
              <TableCell align="center">{t('category')}</TableCell>
              <TableCell align="center">{t('brand')}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell align="center">{product._id}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">
                  <Button
                    component={Link}
                    to={`/admin/product/${product._id}/edit`}
                    className="btn-sm"
                    variant="light"
                  >
                    {t('edit')}
                  </Button>
                  <Button
                    className="btn-sm"
                    variant="light"
                    onClick={() => deleteHandler(product._id)}
                  >
                    {t('delete')}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default ProductListScreen;
