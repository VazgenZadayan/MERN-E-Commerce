import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  details: {
    background: 'rgba(99,99,99, 0.15)',
    padding: theme.spacing(3)
  },
  brand: {
    color: '#969696',
    fontSize: '18px',
    fontFamily: 'Burn',
  },
  title: {
    color: 'white',
    fontSize: '60px',
    textTransform: 'uppercase',
    fontFamily: 'Copperplate',
    fontWeight: 'bold',
    lineHeight: '90%',
  },
  description: {
    fontFamily: 'Copperplate',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
  },
}));
