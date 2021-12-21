import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  return (
    <Skeleton
      variant="rectangular"
      style={{background: 'rgba(99, 99, 99, 0.2)'}}
      animation="wave"
      width='100%'
      height='100%'
    />
  )
}

export default Loader;

