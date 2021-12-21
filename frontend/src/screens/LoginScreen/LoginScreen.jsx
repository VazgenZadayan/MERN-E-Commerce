import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userActions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginValidationSchema } from 'hooks/validator'
import Loader from '../../components/Loader';
import PasswordInput from 'components/PasswordInput/PasswordInput'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import image from 'assets/detailBackground.jpg';
import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const LoginScreen = ({ location, history }) => {

  const { register, handleSubmit, formState: {errors, isValid} } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema)
  });

  const classes = useStyles();
  const { t } = useTranslations();

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = ({ email, password }) => {
    dispatch(login(email,password));
  };
  return (
    <Grid
      container
      className={classes.container}
      style={{
        background: `url(${image}) no-repeat center/cover`,
      }}
    >
      <Container
        component='main'
        maxWidth='xs'
        className={classes.formController}
      >
        <Avatar
          sx={{ bgcolor: 'secondary.main', borderRadius: '0' }}
          className={classes.logo}
        >
          <LockOutlinedIcon color='primary'/>
        </Avatar>
        <h3 className={classes.title}>{t('sign_in')}</h3>
        {loading ? (
          <Loader />
        ) : (
          <Box
            component='form'
            onSubmit={handleSubmit(submitHandler)}
            noValidate
            color='primary'
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              fullWidth
              id='email'
              label={t('email_address')}
              name='email'
              autoComplete='email'
              autoFocus
              type='email'
              {...register('email')}
              error={errors?.email ? true : false}
              helperText={errors?.email && errors.email?.message}
            />
            <PasswordInput
              label={t('password')}
              {...register('password')}
              error={errors?.password ? true : false}
              helperText={errors?.password && errors.password?.message}
            />
            <Button
              type='submit'
              fullWidth
              disabled={!isValid}
              variant='link'
              style={{ width: '100%' }}
            >
              {t('sign_in')}
            </Button>
            <Grid container>
              <Grid item mt={4}>
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : '/register'}
                  variant='body2'
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  {t('dont_have_account')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Grid>
  );
};

export default LoginScreen;
