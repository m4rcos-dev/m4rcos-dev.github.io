import { Box, CircularProgress, Tooltip, Typography } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class IconsProgress extends Component {
  render() {
    const { colorChange, currentTheme, name, progress, src } = this.props;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    return (
      <Box
        sx={{
          m: '0.5rem 0rem 0rem 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >

        <Box sx={{
          position: 'relative',
          display: 'inline-flex',
          width: '45px',
          height: '45px',
          m: '0rem 0.6rem 0rem 0rem',
        }}>

          <CircularProgress
            variant="determinate"
            value={100}
            size='45px'
            sx={{
              color: 'grey.400',
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='body2'
              fontFamily='Hack'
              sx={{
                color: currentTypographyColor,
              }}
            >
              {`${progress}%`}
            </Typography>
          </Box>
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Tooltip title={name}>
              <CircularProgress
                variant="determinate"
                value={progress}
                size='45px'
                sx={{
                  color: colorChange,
                }}
              />
            </Tooltip>
          </Box>
        </Box>
        <Tooltip title={name}>
          <img
            alt={name}
            src={src}
            style={{
              width: '35px',
              height: '35px',
            }} />
        </Tooltip>
      </Box >
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});


// export default IconsProgress;

// ======export Redux=======
export default connect(mapStateToProps)(IconsProgress);
