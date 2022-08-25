import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";

class About extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname}))
  }
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

// export default About;

// ======export Redux=======
export default connect()(About);
