import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUser } from 'store/actions/userActions';
import { USER_UPDATE_RESET } from 'store/constants/userConstants';

import Loader from 'components/Loader';
import Message from 'components/Message';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const UserEditScreen = ({ match, history }) => {
  const classes = useStyles();
  const { t } = useTranslations();

  const userId = match.params.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector(state => state.userUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success:successUpdate } = userUpdate;

  useEffect(() => {
    if(successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/admin/userList');
    } else {
      if(!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin)
      }
    }
  }, [user, dispatch, userId, successUpdate, history]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(updateUser({ _id:userId, name, email, isAdmin}))
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
          <h3 className={classes.title}>Edit User</h3>
          {loadingUpdate && <Loader/>}
          {errorUpdate && <Message>{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <Box
              component='form'
              noValidate
              onSubmit={submitHandler}
              sx={{ mt: 3 }}
            >
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
                    id='email'
                    label={t('email_name')}
                    type='email'
                    name='email'
                    autoComplete='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                <Switch
                  label='isAdmin'
                  checked={isAdmin}
                  onClick={(e) => setIsAdmin(e.target.checked)}
                 />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='link'
                style={{ width: '100%', marginTop: '30px' }}
              >
                {t('update')}
              </Button>
              <Button
                fullWidth
                variant='link'
                component={Link}
                to='/admin/userList'
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

export default UserEditScreen;
