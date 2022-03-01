import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listUsers, deleteUser } from 'store/actions/userActions';

import Loader from 'components/Loader';
import Message from 'components/Message';
import { useTranslations } from 'contexts/translation.context'

import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

const UserList = ({ location, history, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const userList = useSelector(state => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector(state => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if(userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if(window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }
 
  return (
    <Container
      md={12}
      className={classes.container}
    >
      <Typography style={{ fontSize: '40px', textAlign: 'center' }}>
        Users
      </Typography>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table size='small' sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>{t('name')}</TableCell>
              <TableCell align='center'>{t('email_address')}</TableCell>
              <TableCell align='center'>{t('admin')}</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user._id}>
                <TableCell align='center'>{user._id}</TableCell>
                <TableCell align='center'>
                  {user.name}
                </TableCell>
                <TableCell align='center'>{user.email}</TableCell>
                <TableCell align='center'>{user.isAdmin ? (
                  <i className='fas fa-check' style={{color: 'green'}}></i>
                ) : (
                  <i className='fas fa-times' style={{color: 'red'}}></i>
                )}</TableCell>
                <TableCell align='center'>
                <Button
                    component={Link}
                    to={`/admin/user/${user._id}/edit`}
                    className='btn-sm'
                    disabled={user._id === userInfo._id}
                    variant='light'
                  >
                   {t('edit')}
                  </Button>
                  <Button
                    className='btn-sm'
                    variant='light'
                    disabled={user._id === userInfo._id}
                    onClick={() => deleteHandler(user._id)}
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

export default UserList;
