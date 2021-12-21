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
      default: 'rgb(39, 41, 50)',
      paper: 'rgb(39, 41, 50)',
    },
    text:{
      primary: 'rgb(247, 243, 237)'
    },
    primary: {
      main: 'rgb(247, 243, 237)',
    },
    secondary: {
      main: 'rgb(39, 41, 50)',
    },
    success: {
      main: 'rgb(255, 255, 255)'
    }
  },
  components: {
    MuiTable: {
      styleOverrides: {
        stickyHeader: {
          background: 'transparent',
        },
        root: {
          borderCollapse: 'unset',
          borderSpacing: '0 7px',
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          background: 'rgb(145 145 145 / 21%)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '0',
          background: 'transparent',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          position: 'sticky',
          top: 0
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        link: {
          width: 'fit-content',
          fontSize: '16px',
          lineHeight: '16px',
          color: '#f7f3ed',
          height: '35px',
          background: 'rgb(39, 41, 50)',
          ':hover' : {
            background: 'rgba(39, 41, 50, 0.70)',
            color: 'rgba(247, 243, 237, 0.80)',
          }
        },
        text: {
          color: '#ffffff',
          width: '100%',
          height: '37px',
          borderRadius: '0px 0px 10px 10px',
          background: '#e61cb3',
          fontFamily: 'GilroyMedium',
          fontSize: '10px',
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
          background: 'rgb(39, 41, 50)',
          fontFamily:'Copperplate',
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: '21px',
          marginRight: '10px',
          marginBottom: '10px',
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          fontFamily: 'Copperplate',
          background: 'rgb(39, 41, 50)',
          borderRadius: '0',
          fontWeight: 'normal',
          fontSize: '16px',
          color: '#f7f3ed'
        }
      }
    },
    MuiInputLabel:{
      styleOverrides: {
        outlined: {
          color: 'rgba(255, 255, 255, 0.6)',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.6)',
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgb(0, 0, 1)',
        }
      },
    }
  },
});

export default responsiveFontSizes(theme);
