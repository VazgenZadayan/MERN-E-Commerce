import { makeStyles } from '@mui/styles';

export default makeStyles( theme => ({
  container: {
    width: 'fit-content',
    background: '#1a1a1c',
    padding: '7px 10px',
    borderRadius: '100px'
  },
  input: {
    background: '#1a1a1c',
    outline: 'none',
    border: 'none',
    color: 'white',
    textAlign: 'center',
    fontSize: '25px',
    maxWidth: '60px',
    padding: '0',
    "&:hover": {
      cursor: 'auto'
    }
  }
}));