import React from "react";
import Toolbar from "./ToolbarTitle";
import Box from '@mui/material/Box';
import { BoxCustom } from "../style/AppBarTopStyle";
import NavSoicalMedia from "./NavSocialMedia";
import NavAppBar from "./NavAppBar";

const AppBarTop = () => {
  return (
    <BoxCustom>

      <Box sx={{
        width: '100%',
        height: '12vh',
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
