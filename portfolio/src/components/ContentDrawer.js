import { styled } from "@mui/material";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { connect } from "react-redux";

class ContentDrawer extends React.Component {
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
        width: '80%',
        height: '100vh',
        bgcolor: `secondary.${currentTheme}`,
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BoxCustom>
    )
  }
}

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
});

// export default ContentDrawer;

//============export Redux==========================
export default connect(mapStateToProps)(ContentDrawer);
