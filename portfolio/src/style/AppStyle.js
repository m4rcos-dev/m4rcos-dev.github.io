import { styled } from "@mui/material";

//=============Breackpoints MediaQuery==================
export const BoxCustom = styled('div')(({theme}) => ({
  [theme.breakpoints.up('md2')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('md2')]: {
    display: 'flex',
    flexDirection: 'column'
  },
}));
