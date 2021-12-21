import React from 'react';

import Fb from 'components/Fb';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className={classes.container}
    >
      <Grid item md={2}>
        <Typography
          color='primary'
        >
          Best Hookah Store
        </Typography>
      </Grid>
      <Grid item md={7}>
        <Fb column alignCenter>
          <Typography
            color='primary'
            className={classes.title}
          >
            The Capital Shop
          </Typography>
          <Typography
            color='primary'
            className={classes.subtitle}
          >
            since 2020
          </Typography>
        </Fb>
      </Grid>
      <Grid item md={2}>
        <Typography color='primary'>+374 77 16-52-31</Typography>
        <Typography color='primary'>thecapitalshop@gmail.com</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
