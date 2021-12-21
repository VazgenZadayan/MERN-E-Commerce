import { makeStyles } from '@mui/styles';

export default makeStyles({
  title: {
    color: 'white',
    fontFamily: 'Copperplate',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  header: ({ isScrolled }) => ({
    width: '100%',
    top: 0,
    position: 'fixed',
    transition: '0.3s',
    zIndex: '400',
    background: isScrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
  }),
  logo: ({ isScrolled }) => ({
    width: '100px',
    height: isScrolled ? '60px' : '90px',
    transition: '0.5s',
  })
});
