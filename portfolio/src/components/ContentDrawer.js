import { styled } from "@mui/material";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

class ContentDrawer extends React.Component {
  render() {
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
        bgcolor: 'secondary.main',
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

export default ContentDrawer;
