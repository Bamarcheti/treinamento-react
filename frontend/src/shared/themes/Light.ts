import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#25B79D',
      dark: '#36cfb3',
      light: '#42dbc0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#64b5f6',
      dark: '#42a5f5',
      light: '#90caf9',
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f7f6f3',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: '25px',

      display: 'flex',
      alignItems: 'flex-end',

      color: '#4F4F4F',
    },
    h2: {
      color: '#4F4F4F',
      fontFamily: 'Roboto',
      fontStyle: 'medium',
      fontSize: '14px',
      lineHeight: '24px'
    },
  },
});
