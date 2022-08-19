import { Box, Typography } from "@mui/material";
import React from "react";

class Content extends React.Component {
  render() {
    return (
      <Box sx={{
        width: '80%',
        height: '100vh',
      }}>
        <Typography>
          Content
        </Typography>
      </Box>
    )
  }
}

export default Content;
