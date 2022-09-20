import { Box, Button, Typography } from '@mui/material'
import RocketIcon from '@mui/icons-material/Rocket';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import theme from '../style/Theme';
import ImageProjeto1 from '../assets/Projeto1.png'
import IconsProgress from './IconsProgress';

class CardProjectsVanila extends Component {
  render() {
    const { colorChange, currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    const currentTypographySize = currentScreen.width <= values.md2 ? 'body2' : 'h7';
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';
    return (
      <Box sx={{
        width: '40%',
        m: '2rem 1rem 0rem 1rem',
      }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <RocketIcon sx={{ color: colorChange }} fontSize={currentIconTitleSize} />
          <Typography
            variant={currentTypographyTitleSize}
            fontFamily='Hack'
            sx={{
              width: '100%',
              m: '0rem 0rem 0rem 1rem',
              color: colorChange,
            }}>
            HTML, CSS, JAVASCRIPT
          </Typography>
        </Box>

        <Box sx={{
          width: '100%',
          height: 'auto',
          m: '0.5rem 0rem 0rem 0rem',
          p: '0rem 1rem 1rem 0rem',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: `primary.${currentTheme}`,
          borderRadius: '0.7rem',
          boxShadow: '2'
        }}
        >

          <Typography
            variant={currentTypographySize}
            fontFamily='Hack'
            sx={{
              width: '100%',
              m: '0.5rem 0rem 0rem 1rem',
              color: colorChange,
            }}>
            Projeto 1
          </Typography>
          <IconsProgress />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
            }}
          >
            <img
              src={ImageProjeto1}
              alt='projeto1'
              style={{
                margin: '0.5rem 0rem 0rem 1rem',
                width: '40%',
                height: 'auto',
                borderRadius: '5px',
              }}
            />
            <Typography
              variant='body2'
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0.5rem 0rem 0rem 1rem',
                color: currentTypographyColor,
              }}>
              Projeto 1 - TybeWallet TybeWallet TybeWallet kkkkkTybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet
            </Typography>
          </Box>

          <Box
          sx={{
            m: '0.5rem 0rem 0rem 1rem',
            widht: '100%',
            display: 'flex',
          }}
          >
            <Button
              variant="contained"
              sx={{
                width: '30%',
                m: '0rem 1rem 0rem 0rem',
                bgcolor: colorChange,
                color: currentTypographyColor,
                fontFamily: 'Hack',
                fontWeight: 'bolder',
                '&:hover': {
                  bgcolor: colorChange,
                }
              }}>GitHub</Button>
            <Button
              variant="contained"
              sx={{
                width: '30%',
                bgcolor: colorChange,
                color: currentTypographyColor,
                fontFamily: 'Hack',
                fontWeight: 'bolder',
                '&:hover': {
                  bgcolor: colorChange,
                }
              }}>Aplicação
            </Button>
          </Box>

        </Box>

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

// export default CardProjectsVanila

// ======export Redux=======
export default connect(mapStateToProps)(CardProjectsVanila);
