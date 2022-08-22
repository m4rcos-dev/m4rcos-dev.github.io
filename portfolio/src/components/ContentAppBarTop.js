import { styled, Box } from "@mui/material";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

class ContentAppBarTop extends React.Component {
  render() {
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
          bgcolor: 'secondary.main',
        }}>
          <Home />
        </Box>
        <Box id='about' sx={{
          width: '100%',
          height: '92vh',
          bgcolor: 'secondary.main',
        }}>
          <About />
        </Box>
        <Box id='projects' sx={{
          width: '100%',
          height: '92vh',
          bgcolor: 'secondary.main',
        }}>
          <Projects />
        </Box>
      </BoxCustom>
    )
  }
}

export default ContentAppBarTop;
