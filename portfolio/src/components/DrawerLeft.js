import React from "react";
import Toolbar from "./ToolbarTitle";
import Box from '@mui/material/Box';
import NavDrawer from "./NavDrawer";

class DrawerLeft extends React.Component {
  render() {
    return (
      <Box sx={{
        width: '20%',
        height: '100vh',
        bgcolor: 'primary',
        borderRight: 1,
        borderColor: 'divider'
      }}>
        <Toolbar />
        <NavDrawer />
      </Box>
    )
  }
}

export default DrawerLeft;
