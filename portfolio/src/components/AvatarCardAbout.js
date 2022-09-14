import { Box } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class AvatarCardAbout extends Component {
  render() {
    const { currentTheme } = this.props;
    return (
      <Box
      sx={{
        width: '87%',
        height: '30vh',
        m: '2rem 0rem 0rem 0rem',
        bgcolor: `primary.${currentTheme}`,
        borderRadius: '0.7rem',
        boxShadow: '2'
      }}
    >
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

// export default AvatarCardAbout;

// ======export Redux=======
export default connect(mapStateToProps)(AvatarCardAbout);
