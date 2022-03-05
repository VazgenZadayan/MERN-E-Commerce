import { makeStyles } from '@mui/styles';

export default makeStyles({
  card: {
    height: '400px',
    padding: '7px 7px 7px 7px',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    transition: '0.4s ease-out',
	  boxShadow: '0px 7px 10px #0000008c',
    borderRadius: '10px',
    '&:hover': {
      transform: 'translateY(5px)',
      '&::before': {
        opacity: '1',
      },
    },
    '&::before': {
      content: "' '",
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: '2',
      transition: '0.8s',
      opacity: '0',
    }
  },
  media: {
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
    width: '100%',
    height: '100%',
  },
  info: {
    position: 'relative',
    zIndex: '3',
    color: 'white',
    opacity: '0',
    transform: 'translateY(30px)',
    transition: '0.5s',
    '&:hover': {
      opacity: '1',
      transform: 'translateY(0px)'
    }
  },
  price: {
    marginBottom: '110px', marginLeft: '72%'
  },
  description: {
    textOverflow:'ellipsis',
    overflow:'hidden',
    display: '-webkit-box',
    WebkitLineClamp: '4',
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
    marginBottom: '10px',
    lineHeight: '18px',
  },
})