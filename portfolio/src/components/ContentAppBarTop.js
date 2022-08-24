import { styled, Box } from "@mui/material";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { connect } from "react-redux";

class ContentAppBarTop extends React.Component {
  render() {
    const { currentTheme } = this.props;
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled('div')(({ theme }) => ({
      [theme.breakpoints.up('md3')]: {
        display: 'none',
      },
    }));

    return (
      <BoxCustom sx={{ marginTop: '8vh', }}>
        <Box id='home' sx={{
          width: '100%',
          height: '92vh',
          bgcolor: `secondary.${currentTheme}`,
        }}>
          <Home />
        </Box>
        <Box id='about' sx={{
          width: '100%',
          height: '92vh',
          bgcolor: `secondary.${currentTheme}`
        }}>
          <About />
        </Box>
        <Box id='projects' sx={{
          width: '100%',
          height: '92vh',
          bgcolor: `secondary.${currentTheme}`
        }}>
          <Projects />
        </Box>
      </BoxCustom>
    )
  }
}

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
});

// export default ContentAppBarTop;

//============export Redux==========================
export default connect(mapStateToProps)(ContentAppBarTop);
