import React from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Fb from 'components/Fb/Component';

import useStyles from './styles';

const CustomSelect = ({ productCount, value, setValue, productId }) => {
  const classes = useStyles();

  return (
    <Fb className={classes.container}>
      <Fab
        color="secondary"
        aria-label="add"
        size="small"
        disabled={value <= 1}
        onClick={() => setValue(value - 1, productId)}
      >
        <RemoveIcon />
      </Fab>
      <input type="text" value={value} className={classes.input} readOnly />
      <Fab
        color="secondary"
        aria-label="add"
        size="small"
        disabled={value === productCount}
        onClick={() => setValue(value + 1, productId)}
      >
        <AddIcon />
      </Fab>
    </Fb>
  );
};

export default CustomSelect;
