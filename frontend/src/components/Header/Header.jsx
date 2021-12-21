import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'store/actions/userActions';

import SearchBox from 'components/SearchBox/SearchBox';

import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import logo from 'assets/logo.svg';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  let productCountInCart = cartItems.reduce((sum, { qty }) => sum + qty, 0);

  const [isScrolled, setIsScrolled] = useState(false);
  const classes = useStyles({ isScrolled });

  const handleScrollChange = () => {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    setIsScrolled(top > 100);
  };

  const [anchorEl, setAnchorEl] = useState(false);
  const [anchor, setAnchor] = useState(false);
  const [languagesAnchorEl, setLanguagesAnchorEl] = useState(false);
  const [languagesAnchor, setLanguagesAnchor] = useState(false);
  const { setLanguage } = useTranslations();

  const handleOpenAccountSettings = event => {
    setAnchor(event.currentTarget);
    setAnchorEl(true);
  };
  const handleCloseAccountSettings = () => {
    setAnchorEl(false);
  };

  const handleOpenLanguagesSettings = event => {
    setLanguagesAnchor(event.currentTarget);
    setLanguagesAnchorEl(true);
  };
  const handleCloseLanguagesSettings = () => {
    setLanguagesAnchorEl(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange);
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  return (
    <Grid
      container
      px={8}
      py={2}
      alignItems='center'
      justifyContent='space-between'
      className={classes.header}
    >
      <Grid item md={3}>
        <Link to='/'>
          <img src={logo} alt='logo' className={classes.logo} />
        </Link>
      </Grid>
      <Grid item>
        <Stack direction='row' spacing={1}>
          {userInfo ? (
            <>
              <Tooltip title='Account settings' color='primary'>
                <Fab
                  size='medium'
                  color='secondary'
                  onClick={handleOpenAccountSettings}
                >
                  <Typography color='primary'>
                    {userInfo.name.substring(0, 1)}
                  </Typography>
                </Fab>
              </Tooltip>
              <Menu
                disableAutoFocusItem
                anchorEl={anchor}
                open={anchorEl}
                onClose={handleOpenAccountSettings}
                onClick={handleCloseAccountSettings}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem component={Link} to='/profile'>
                  <ListItemIcon>
                    <PersonOutlineIcon color='secondary' />
                  </ListItemIcon>
                  <ListItemText>{t('my_profile')}</ListItemText>
                </MenuItem>
                {userInfo && userInfo.isAdmin && (
                  <div>
                    <MenuItem component={Link} to='/admin/userlist'>
                      <ListItemIcon>
                        <PeopleAltIcon color='secondary' />
                      </ListItemIcon>
                      <ListItemText>{t('users')}</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/admin/productlist'>
                      <ListItemIcon>
                        <FolderIcon color='secondary' />
                      </ListItemIcon>
                      <ListItemText>{t('products')}</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} to='/admin/orderlist'>
                      <ListItemIcon>
                        <AssignmentIcon color='secondary' />
                      </ListItemIcon>
                      <ListItemText>{t('orders')}</ListItemText>
                    </MenuItem>
                  </div>
                )}

                <MenuItem onClick={logoutHandler}>
                  <ListItemIcon>
                    <LogoutIcon color='secondary' />
                  </ListItemIcon>
                  <ListItemText>{t('exit')}</ListItemText>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link to='/login'>
              <Fab onClick={logoutHandler} size='medium' color='secondary'>
                <PersonOutlineIcon color='primary' />
              </Fab>
            </Link>
          )}
          <Link to='/cart'>
            <Badge
              badgeContent={cartItems.length && productCountInCart}
              color='primary'
            >
              <Fab size='medium' color='secondary'>
                <ShoppingCartIcon color='primary' />
              </Fab>
            </Badge>
          </Link>

          <Fab
            size='medium'
            color='secondary'
            onClick={handleOpenLanguagesSettings}
          >
            <LanguageIcon
              color='primary'
              />
          </Fab>
          <Menu
            disableAutoFocusItem
            anchorEl={languagesAnchor}
            open={languagesAnchorEl}
            onClose={handleOpenLanguagesSettings}
            onClick={handleCloseLanguagesSettings}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => setLanguage('ru')}>RU</MenuItem>
            <MenuItem onClick={() => setLanguage('en')}>EN</MenuItem>
            <MenuItem onClick={() => setLanguage('hy')}>HY</MenuItem>
          </Menu>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
