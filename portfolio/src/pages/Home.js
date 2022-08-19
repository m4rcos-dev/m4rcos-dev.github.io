import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'

class Home extends React.Component {
  render() {
    return (
      <Slide direction="left" in mountOnEnter unmountOnExit>
        <Box>
          <Typography>
            Home
          </Typography>
        </Box>
      </Slide>
    )
  }
}

export default Home;
