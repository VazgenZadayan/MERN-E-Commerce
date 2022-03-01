import { makeStyles } from '@mui/styles';

export default makeStyles({
  header: ({ isScrolled }) => ({
    width: '100%',
    top: 0,
    position: 'sticky',
    height: 'fill-content',
    padding: '10px 0',
    transition: '0.3s',
    zIndex: '400',
    background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
  }),
  logo: {
    textDecoration: 'none',
    color: 'white',
  }
});
