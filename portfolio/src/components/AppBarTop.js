import React from "react";
import Toolbar from "./ToolbarTitle";
import Box from '@mui/material/Box';
import NavSoicalMedia from "./NavSocialMedia";
import NavAppBar from "./NavAppBar";
import { styled } from "@mui/material";
import ToolbarTitleSmall from "./ToolbarTitleSmall";

//=============Breackpoints MediaQuery==================
const BoxCustom = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md3')]: {
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
        bgcolor: 'primary.main',
        borderBottom: 1,
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <NavAppBar />
        <Toolbar />
        <ToolbarTitleSmall />
        <NavSoicalMedia />
      </Box>

    </BoxCustom>
  );
};

export default AppBarTop;
