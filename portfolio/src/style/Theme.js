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
    },
    alternateColor: {
      orange: '#ff5722',
      green: '#03ff42',
      blue: '#2d03ff',
      red: '#ff0303'
    },
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
  breakpoints: {
    values: {
      md2: 1441,
      md3: 1000,
    },
  }
});

export default theme;
