import { makeStyles } from '@mui/styles';

export default makeStyles(active => (
  ({
    searchBox: active => (
      {
        position: 'relative',
        height:'45px',
        width: active ? '350px' : '60px',
        borderRadius: '50%',
        boxShadow: '5px 5px 30px rgba(0,0,0,.2)',
        transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    ),
    searchBoxInput: active => (
      {
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '2px',
        background: '#fff',
        outline: 'none',
        padding: '0 60px 0 20px',
        fontSize: '18px',
        opacity: active ? '1' : '0',
        transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        '&::placeholder': {
          color: 'a6a6a6'
        }
      }
    ),
    searchIcon: active => (
      {
        position: 'absolute',
        visibility: active ? 'hidden' : 'visible',
        right: active ? '5px' :'0px',
        top: '50%',
        transform: active ? 'translateY(-50%) rotate(360deg)' : 'translateY(-50%)',
        height: active ? '40px' : '60px',
        width: active ? '40px' : '60px',
        background: 'none',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: active ? '50px' : '60px',
        fontSize: active ? '20px' : '22px',
        color: '#fff',
        cursor: 'pointer',
        zIndex: '1',
        transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    ),
    cancelIcon: active => (
      {
        position: 'absolute',
        visibility: active ? 'visible' : 'hidden',
        right: active ? '-40px' : '20px',
        top: '50%',
        transform: active ? 'translateY(-50%) rotate(360deg)' : 'translateY(-50%)',
        color: '#fff',
        cursor: 'pointer',
        transition: 'all 0.5s 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    ),
    searchData: active => (
      {
        textAlign: 'center',
        paddingTop: '7px',
        color: '#fff',
        fontSize: '18px',
        wordWrap: 'break-word',
        display: active ? 'none' : 'block'
      }
    )
  })
))
