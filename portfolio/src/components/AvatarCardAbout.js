import { Avatar, Box, styled, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../style/IconsTechnologies.css'
import '../style/AboutAnimation.css'
import { dataAvatarCardAbout } from '../data/dataPageAbout';
import theme from "../style/Theme";

class AvatarCardAbout extends Component {
  render() {
    //=============Breackpoints MediaQuery==================
    const AvatarCustom = styled(Avatar)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        width: '90px',
        height: '90px',
      },
      [theme.breakpoints.down('md3')]: {
        display: 'none',
      },
    }));

    const BoxCustom = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        height: 'auto',
      },
    }));
    const { currentTheme, colorChange, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    const currentTypographySize = currentScreen.width <= values.md2 ? 'body2' : 'h7';
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';
    return (
      <BoxCustom
        sx={{
          maxWidth: '87%',
          height: '35vh',
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
            {dataAvatarCardAbout(colorChange, currentIconTitleSize).icon1}
            <Typography
              variant={currentTypographyTitleSize}
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
              display: 'flex',
              m: '0rem 1rem 0rem 0rem',
            }}
          >
            <Typography
              fontFamily='Hack'
              variant={currentTypographySize}
              sx={{
                color: `common.${currentTypographyColor}`,
              }}
            >
              <p>{dataAvatarCardAbout().text1.slice(0, 328)}</p>
              <p>{dataAvatarCardAbout().text1.slice(325, 483)}</p>
              <p>{dataAvatarCardAbout().text1.slice(489, 559)}</p>
            </Typography>
            <AvatarCustom
              className='shadow-pop-br rotate-in-2-cw'
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

        </Box>
      </BoxCustom>
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
