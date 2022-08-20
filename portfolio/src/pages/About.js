import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'


class About extends React.Component {
  render(){
    return(
      <Box>
        <Slide direction="left" in mountOnEnter unmountOnExit>
        <Typography>
          About
        </Typography>
        </Slide>
      </Box>
    )
  }
}

export default About;
