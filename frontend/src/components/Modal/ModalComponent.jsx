import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Fb from 'components/Fb';

import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


import { useTranslations } from 'contexts/translation.context';

import useStyles from './styles';

const ModalComponent = () => {
  const classes = useStyles();
  const { t } = useTranslations();

  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    let pop_status = localStorage.getItem('is_adult');
    if (!pop_status) {
      setIsOpen(true);
    }
  }, []);

  isChecked && localStorage.setItem('is_adult', 1);
  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <h1 className={classes.heading}>{t('are_you_adult')}</h1>
        <Divider style={{ background: '#e61cb5' }} light />
        <h5 className={classes.text}>{t('adult_text')}</h5>
        <Divider
          style={{ background: '#e61cb5', width: '100px', margin: '0 auto' }}
          light
        />
        <Fb alignCenter>
          <Checkbox
            style={{ color: 'white' }}
            label="yes"
            checked={isChecked}
            onClick={(e) => setIsChecked(e.target.checked)}
          />
          <h4 className={classes.applyText}>
            {t('accept_policy')}{' '}
            <Link
              style={{ color: 'white' }}
              target="_blank"
              to={{
                pathname:
                  'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5',
              }}
            >
              {t('privacy_policy')}
            </Link>
          </h4>
        </Fb>
        <Fb justifyCenter>
          <Button
            variant="link"
            disabled={!isChecked}
            onClick={() => setIsOpen(false)}
          >
            Войти на сайт
          </Button>
        </Fb>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
