import React from "react";
import ToolbarTitle from "./ToolbarTitle";
import NavDrawer from "./NavDrawer";
import { Box } from "@mui/system";
import NavSoicalMedia from "./NavSocialMedia";
import { styled } from "@mui/material";
import ToolbarTitleSmall from "./ToolbarTitleSmall";
import NavDrawerSmall from "./NavDrawerSmall";
import { connect } from 'react-redux';

class DrawerLeft extends React.Component {
  render() {
    const { currentTheme } = this.props;
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled('div')(({ theme }) => ({
      [theme.breakpoints.down('md3')]: {
        display: 'none',
      },
    }));

    return (
      <BoxCustom sx={{
        width: '20%',
        height: '100vh',
        bgcolor: `primary.${currentTheme}`,
        borderRight: 1,
        borderColor: 'divider',
      }}>
        <Box sx={{ mt: '4rem' }}>
          <ToolbarTitle />
          <ToolbarTitleSmall />
        </Box>
        <NavDrawer />
        <NavDrawerSmall />
        <Box sx={{ mt: '5rem', display: 'flex', justifyContent: 'center' }} >
          <NavSoicalMedia />
        </Box>
      </BoxCustom>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
});

export default connect(mapStateToProps)(DrawerLeft);
