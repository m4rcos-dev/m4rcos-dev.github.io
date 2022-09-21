import { Box, styled } from "@mui/material";
import React from "react";
import ColorChange from "./ColorChange";
import ThemeChange from "./ThemeChange";
import NavSocialMedia from "./NavSocialMedia"

class ControlPanel extends React.Component {
  render() {
    //=============Breackpoints MediaQuery==================
    const BoxCustomSocialMedia = styled('div')(({ theme }) => ({
      padding: '0.3rem 0.5rem 1rem 1rem',
      [theme.breakpoints.up('md3')]: {
        display: 'none',
      },
    }));

    return (
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
        <BoxCustomSocialMedia>
          <NavSocialMedia />
        </BoxCustomSocialMedia>
      </Box>
    )
  }
}

export default ControlPanel;
