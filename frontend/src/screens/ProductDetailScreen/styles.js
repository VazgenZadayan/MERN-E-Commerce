import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  container: {
    height: '88vh',
  },
  mainGrid: {
    height: '75vh',
    margin: '0 auto',
    position: 'relative', 
    overflow: 'hidden', 
  },
  descriptionBlock:{
    height: '100%',
    borderRadius: '10px'
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
