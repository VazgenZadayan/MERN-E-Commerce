import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  return (
    <Skeleton
      variant="rectangular"
      style={{background: 'rgb(18,18,18)', borderRadius: '10px'}}
      animation="wave"
      width='100%'
      height='100%'
    />
  )
}

export default Loader;

