import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
class Content extends React.Component {
  render() {
    return (
      <Box sx={{
        width: '80%',
        height: '100vh',
        bgcolor: 'secondary.main'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Box>
    )
  }
}

export default Content;
