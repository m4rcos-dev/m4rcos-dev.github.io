import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";

class Home extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname}))
  }
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

// export default Home;

// ======export Redux=======
export default connect()(Home);
