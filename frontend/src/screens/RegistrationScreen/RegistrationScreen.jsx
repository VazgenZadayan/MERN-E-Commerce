import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAction } from 'store/actions/userActions';

import Loader from 'components/Loader';
import Message from 'components/Message';
import PasswordInput from 'components/PasswordInput/PasswordInput'

import { registerValidationSchema } from 'hooks/validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const RegistrationScreen = ({ location, history }) => {
  const classes = useStyles();
  const { t } = useTranslations();
 
  const { register, handleSubmit, formState: {errors, isValid} } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerValidationSchema)
  });

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = ({name, email, password, confirmPassword}) => {
      dispatch(userRegisterAction(name, email, password));
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
          <h3 className={classes.title}>Sign up</h3>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Box
            component='form'
            noValidate
            onSubmit={(handleSubmit(submitHandler))}
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
                  autoFocus
                  {...register('name')}
                  error={errors?.name ? true : false}
                  helperText={errors?.name && errors.name?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label={t('email_address')}
                  type='email'
                  name='email'
                  autoComplete='email'
                  {...register('email')}
                  error={errors?.email ? true : false}
                  helperText={errors?.email && errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  label={t('password')}
                  {...register('password')}
                  error={errors?.password ? true : false}
                  helperText={errors?.password && errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  label={t('confirm_password')}
                  {...register('confirmPassword')}
                  error={errors?.confirmPassword ? true : false}
                  helperText={errors?.confirmPassword && errors.confirmPassword?.message}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='link'
              disabled={!isValid}
              style={{ width: '100%', marginTop: '30px' }}
            >
              {t('sign_up')}
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item style={{ marginTop: '10px' }}>
                <Link
                  to={redirect ? `/login?redirect=${redirect}` : '/login'}
                  variant='body2'
                  style={{ color: 'white' }}
                >
                  {t('already_have_account')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default RegistrationScreen;
