import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefaff',
      light: '#fefaff',
      dark: '#232123'
    },
    secondary: {
      main: '#f4f4fe',
      light: '#f4f4fe',
      dark: '#151415',
    },
    alternateColor1: {
      main: '#ff5722',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'DynaPuff',
      'Hack',
    ].join(','),
  },
});

export default theme;
