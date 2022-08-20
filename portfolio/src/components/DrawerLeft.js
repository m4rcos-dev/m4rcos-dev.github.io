import React from "react";
import Toolbar from "./ToolbarTitle";
import NavDrawer from "./NavDrawer";
import { BoxCustom } from "../style/DrawerLeftStyle";

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
        <Toolbar />
        <NavDrawer />
      </BoxCustom>
    )
  }
}

export default DrawerLeft;
