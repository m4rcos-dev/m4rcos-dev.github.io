import { styled } from "@mui/material";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { connect } from "react-redux";

class ContentDrawer extends React.Component {
  render() {
    const { currentTheme, currentScreen } = this.props;
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled('div')(({ theme }) => ({
      [theme.breakpoints.down('md3')]: {
        marginTop: '8vh',
        width: '100%',
        height: '92vh',
      },
      [theme.breakpoints.up('md3')]: {
        width: '80%',
        height: '100vh',
      },
    }));

    return (
      <BoxCustom sx={{
        bgcolor: `secondary.${currentTheme}`,
      }}>
        <Routes>
          <Route path="/" element={<Home currentScreen={currentScreen}/>} />
          <Route path="about" element={<About currentScreen={currentScreen}/>} />
          <Route path="projects" element={<Projects currentScreen={currentScreen}/>} />
        </Routes>
      </BoxCustom>
    )
  }
}

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.currentScreen,
});

// export default ContentDrawer;

//============export Redux==========================
export default connect(mapStateToProps)(ContentDrawer);
