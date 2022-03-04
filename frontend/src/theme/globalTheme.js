import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Copperplate',
    color: 'rgb(247, 243, 237)',
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    background: {
      default: 'rgb(18 18 18)',
      paper: 'rgb(18 18 18)',
    },
    text: {
      primary: 'rgb(247, 243, 237)',
    },
    primary: {
      main: 'rgb(247, 243, 237)',
    },
    secondary: {
      main: 'rgb(18, 18, 18)',
    },
    success: {
      main: 'rgb(255, 255, 255)',
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'unset',
          borderSpacing: '0 3px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          background: 'rgb(18 18 18)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '0',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          zIndex: '1000px',
          position: 'sticky',
          top: 0,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        link: {
          width: '220px',
          fontSize: '18px',
          lineHeight: '16px',
          color: '#f7f3ed',
          height: '40px',
          background: '#ff6900',
        },
        text: {
          color: '#ffffff',
          width: '220px',
          height: '37px',
          borderRadius: '10px',
          background: '#1a1a1c',
          fontFamily: 'GilroyMedium',
          fontSize: '10px',
        },
        light: {
          ':disabled': {
            color: '#ffffff4a',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          minWidth: '100%',
        },
        maxWidthMd: {
          minWidth: '90%',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorInherit: 'rgba(255, 255, 255, 0.8)',
        root: {
          background: 'rgb(18, 18, 18)',
          fontFamily: 'Copperplate',
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: '21px',
          marginRight: '10px',
          marginBottom: '10px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          fontFamily: 'Copperplate',
          background: '#1a1a1c',
          borderRadius: '0',
          fontWeight: 'normal',
          fontSize: '16px',
          color: '#f7f3ed',
        },
      },
    },
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          background: '#000000!important'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
