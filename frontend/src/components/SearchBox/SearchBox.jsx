import React, { useState } from 'react';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import useStyles from './styles';
import { useTranslations } from 'contexts/translation.context';

const SearchBox = ({ history }) => {
  const { t } = useTranslations();
  const [keyword, setKeyword] = useState('');
  const [active, setActive] = useState(false);

  const classes = useStyles(active);

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <Box
        className={classes.searchBox}
        active={active ? true : undefined}
        onClick={submitHandler}
      >
        <input
          className={classes.searchBoxInput}
          type='text'
          placeholder={t('search')}
          onChange={e => setKeyword(e.target.value)}
        />
        <div className={classes.searchIcon} onClick={() => setActive(true)}>
          <Fab size='medium' color='secondary'>
            <SearchIcon color='primary' />
          </Fab>
        </div>
        <div className={classes.cancelIcon} onClick={prev => setActive(!prev)}>
          <CloseIcon />
        </div>
        <div className={classes.searchData}></div>
      </Box>
    </>
  );
};

export default SearchBox;
