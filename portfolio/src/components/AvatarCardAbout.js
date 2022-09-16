import { Avatar, Box, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../style/IconsTechnologies.css'
import { dataAvatarCardAbout } from '../data/dataPageAbout';

class AvatarCardAbout extends Component {
  render() {
    const { currentTheme, colorChange } = this.props;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    return (
      <Box
        sx={{
          maxWidth: '87%',
          height: '50vh',
          m: '2rem 0rem 0rem 0rem',
          bgcolor: `primary.${currentTheme}`,
          borderRadius: '0.7rem',
          boxShadow: '2',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            m: '1rem 0rem 0rem 2rem'
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {dataAvatarCardAbout(colorChange, 'large').icon1}
            <Typography
              variant='h4'
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >{dataAvatarCardAbout().title1}</Typography>
          </Box>
          <Box
            sx={{
              m: '0.5rem 0rem 1rem 0rem'
            }}
          >
            <Typography
              fontFamily='Hack'
              variant='h7'
              sx={{
                color: `common.${currentTypographyColor}`,
              }}
            >
              {dataAvatarCardAbout().text1}
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {dataAvatarCardAbout(colorChange, 'large').icon2}
            <Typography
              variant='h4'
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >{dataAvatarCardAbout().title2}</Typography>
          </Box>
          <Box
            sx={{
              m: '1rem 0rem 1rem 0rem'
            }}
          >
            {dataAvatarCardAbout().icosTechnologies.map((icon) => (
              <img
                key={icon.alt}
                alt={icon.alt}
                className='drop-shadow-svg'
                src={icon.src}
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
            ))}
          </Box>
        </Box>
        <Avatar
          alt="avatar"
          variant="rounded"
          src={dataAvatarCardAbout().avatarImage}
          sx={{
            width: '190px',
            height: '190px',
            m: '0rem 2rem 0rem 2rem',
            boxShadow: '9',
          }}
        />
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
