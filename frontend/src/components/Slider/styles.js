import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh', 
    width: '80%', 
    padding: '149px 0 0 0'
  },
  mainGrid: {
    height: '455px', 
    margin: '0 auto',
    position: 'relative', 
    overflow: 'hidden', 
  },
  sidebar: {
    height: '100%',
    width: '38%',
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
  },
  mainSlide: {
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '40%',
    width: '100%',
    transition: 'transform 1.5s ease-in-out',
  },
  mainSlideDiv: {
    height: '100%',
    width: '100%',
    background: 'rgba(99, 99, 99, 0,15)',
  },
  description: {
    fontFamily: 'Copperplate',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '27px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'normal',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
  },
  name: {
    fontSize: '60px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    lineHeight: '90%',
    width: '318px',
  },
}))