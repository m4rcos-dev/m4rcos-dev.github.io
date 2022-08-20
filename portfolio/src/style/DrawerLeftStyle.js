import { styled } from "@mui/material";
// import { red, green, blue } from '@mui/material/colors';

//=============Breackpoints MediaQuery==================
export const BoxCustom = styled('div')(({theme}) => ({
  [theme.breakpoints.down('md2')]: {
    display: 'none',
  },
}));
