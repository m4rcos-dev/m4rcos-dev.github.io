import { Box } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'
import theme from "../style/Theme";
import "../style/HomeAnimation.css"

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";
import { activeTransition } from "../redux/actions/activeTransition";
import CardInfo from "../components/CardInfo";
import ImageInfo from "../components/ImageInfo";

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname }))
  }

  handleTransition = () => {
    const { dispatch } = this.props;
    dispatch(activeTransition(false))
  }

  render() {
    // ============BreakPoints e ChangeTheme============
    const { currentScreen, isTransition } = this.props;
    const { breakpoints: { values } } = theme;
    const currentSlideDirection = currentScreen.width <= values.md3 ? 'up' : 'left';

    return (
      <Slide
        direction={currentSlideDirection}
        in
        appear={isTransition}
        addEndListener={this.handleTransition}
        mountOnEnter
        unmountOnExit>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <CardInfo />
          <ImageInfo />
        </Box>
      </Slide>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default Home;

// ======export Redux=======
export default connect(mapStateToProps)(Home);
