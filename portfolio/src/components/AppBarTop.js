import React from "react";
import Toolbar from "./ToolbarTitle";
import Box from '@mui/material/Box';
import NavSoicalMedia from "./NavSocialMedia";
import NavAppBar from "./NavAppBar";
import { styled } from "@mui/material";

//=============Breackpoints MediaQuery==================
const BoxCustom = styled('div')(({theme}) => ({
  [theme.breakpoints.up('md2')]: {
    display: 'none',
  },
}));

const AppBarTop = () => {
  return (
    <BoxCustom>

      <Box sx={{
        width: '100%',
        height: '8vh',
        position: 'Fixed',
        bgcolor: 'primary',
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <NavAppBar />
            <Toolbar />
            <NavSoicalMedia />
      </Box>

    </BoxCustom>
  );
};

export default AppBarTop;
