import React from "react";
import ToolbarTitle from "./ToolbarTitle";
import NavDrawer from "./NavDrawer";
import { BoxCustom } from "../style/DrawerLeftStyle";
import { Box } from "@mui/system";
import NavSoicalMedia from "./NavSocialMedia";

class DrawerLeft extends React.Component {
  render() {
    return (
      <BoxCustom sx={{
        width: '20%',
        height: '100vh',
        bgcolor: 'primary',
        borderRight: 1,
        borderColor: 'divider',
      }}>
        <Box sx={{ mt: '4rem' }}>
          <ToolbarTitle />
        </Box>
        <NavDrawer />
        <Box sx={{ mt: '5rem', display: 'flex', justifyContent: 'center' }} >
          <NavSoicalMedia />
        </Box>
      </BoxCustom>
    )
  }
}

export default DrawerLeft;
