import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh', 
    width: '100%', 
  },
  mainGrid: {
    height: '75vh', 
    margin: '0 auto',
    marginTop: '40px',
    position: 'relative', 
    overflow: 'hidden', 
  },
  sidebar: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: '0',
    transition: 'transform 1.5s ease-in-out'
  },
  sideBarDiv: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    borderRadius: '10px'
  },
  mainSlide: {
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '55%',
    width: '100%',
    transition: 'transform 1.5s ease-in-out',
  },
  mainSlideDiv: {
    height: '100%',
    width: '100%',
    borderRadius: '10px'
  },
  description: {
    fontFamily: 'Copperplate',
    fontWeight: 'normal',
    fontSize: '20px',
   
  },
  name: {
    fontSize: '60px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    lineHeight: '90%',
    marginBottom: '20px'
  },
  keydown: {
    position: 'absolute',
    bottom: '40px',
    fontSize: '60px',
    left: 'calc(50% - 30px)',
    cursor: 'pointer',
    animation: '$downEffect 3s infinite'
  },
  "@keyframes downEffect": {
    "0%": {
      bottom: '40px'
    },
    "50%": {
      bottom: '0'
    },
    "100%": {
      bottom: '40px'
    }
  }
}))