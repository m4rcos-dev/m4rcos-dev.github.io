import React from "react";
import ToolbarTitle from "./ToolbarTitle";
import NavDrawer from "./NavDrawer";
import { Box } from "@mui/system";
import NavSoicalMedia from "./NavSocialMedia";
import { styled } from "@mui/material";
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
        position: 'fixed',
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

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
});

// export default DrawerLeft;

//============export Redux==========================
export default connect(mapStateToProps)(DrawerLeft);
