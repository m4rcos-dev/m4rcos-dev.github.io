import { styled } from "@mui/material";

//=============Breackpoints MediaQuery==================
export const BoxCustom = styled('div')(({theme}) => ({
  [theme.breakpoints.up('md2')]: {
    display: 'none',
  },
}));
