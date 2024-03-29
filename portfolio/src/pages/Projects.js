import { Box } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'
import theme from "../style/Theme";

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";
import { activeTransition } from "../redux/actions/activeTransition";
import CardProjects from "../components/CardProjects";

class Projects extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname }))
  }

  handleTransition = () => {
    const { dispatch } = this.props;
    dispatch(activeTransition(false))
  }

  render() {
    const { currentScreen, isTransition } = this.props;
    const { breakpoints: { values } } = theme;
    const currentSlideDirection = currentScreen.width <= values.md3 ? 'up' : 'left';
    return (
      <Box>
        <Slide
          direction={currentSlideDirection}
          in
          appear={isTransition}
          addEndListener={this.handleTransition}
          mountOnEnter
          unmountOnExit>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardProjects />
          </Box>
        </Slide>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default Projects;

// ======export Redux=======
export default connect(mapStateToProps)(Projects);
