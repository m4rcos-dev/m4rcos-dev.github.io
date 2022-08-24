import React from "react";
import Toolbar from "./ToolbarTitle";
import Box from '@mui/material/Box';
import NavSoicalMedia from "./NavSocialMedia";
import NavAppBar from "./NavAppBar";
import { styled } from "@mui/material";
import ToolbarTitleSmall from "./ToolbarTitleSmall";
import { connect } from "react-redux";

//=============Breackpoints MediaQuery==================
const BoxCustom = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md3')]: {
    display: 'none',
  },
}));

class AppBarTop extends React.Component {
  render() {
    const { currentTheme } = this.props;
    return (
      <BoxCustom>

        <Box sx={{
          width: '100%',
          height: '8vh',
          position: 'Fixed',
          bgcolor: `primary.${currentTheme}`,
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
  }
};

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
});


// export default AppBarTop;

//============export Redux==========================
export default connect(mapStateToProps)(AppBarTop);
