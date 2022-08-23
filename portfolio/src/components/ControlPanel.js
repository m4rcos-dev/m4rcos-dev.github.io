import { Box } from "@mui/material";
import React from "react";
import ColorChange from "./ColorChange";
import ThemeChange from "./ThemeChange";

class ControlPanel extends React.Component {
  render(){
    return(
      <Box sx={{
        position: 'Fixed',
        right: '0',
        mt: '5rem', mr: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        }}>
          <ThemeChange />
          <ColorChange />
      </Box>
    )
  }
}

export default ControlPanel;
