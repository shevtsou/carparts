
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import MainScreen from './components/MainScreen';



const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: 'white',
        color: 'black',
        colorSecondary: '#008AFF',
      }
      // colorDefault: '#FFFFFF',
      // colorPrimary: '#FFFFFF'
    },
    MuiButton: {
      textPrimary: {
        fontWeight: 900,
      },
      textSizeSmall: {
        fontWeight: 900,
      },
      text: {
        fontWeight: 900,
      }
    }
  },
  typography: {
    h5: {
      fontWeight: 900,
    },
  },
  palette: {
    primary: {
      main:'#008AFF',
    },
    // secondary: {
    //   // light: '#0066ff',
    //   main: '#2196f3',
    //   // contrastText: '#ffcc00',
    // },
    // contrastThreshold: 3,
    // tonalOffset: 0.2,
  },
});

export default function CustomStyles() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainScreen />
    </MuiThemeProvider>
  );
}