import { Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import theme from '../style/Theme';
import IconsProgress from './IconsProgress';
import { dataProjectsVanila } from '../data/dataPageProjects';
import { v4 as uuidv4 } from 'uuid';

class CardProjects extends Component {
  render() {
    const { colorChange, currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    const currentTypographySize = currentScreen.width <= values.md2 ? 'body2' : 'h7';
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';
    return (
      dataProjectsVanila(colorChange, currentIconTitleSize).map((dataVanila) => (
        <Box
          key={uuidv4()}
          sx={{
            width: '100%',
            m: '2rem 1rem 0rem 1rem',
          }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {dataVanila.head.icon}
            <Typography
              variant={currentTypographyTitleSize}
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}>
              {dataVanila.head.title}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {dataVanila.body.map((dataVanilabody) => (
              <Box
                key={uuidv4()}
                sx={{
                  width: '45%',
                  height: 'auto',
                  m: '0.5rem 1rem 0.5rem 0rem',
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
                  {dataVanilabody.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  {dataVanilabody.technologiesProgress.map((dataTech) => (
                    <IconsProgress
                      key={uuidv4()}
                      name={dataTech.name}
                      progress={dataTech.progress}
                      src={dataTech.src}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                  }}
                >
                  <img
                    src={dataVanilabody.imageProject}
                    alt={dataVanilabody.title}
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
                    {dataVanilabody.text}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    m: '1rem 0rem 0rem 1rem',
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
            ))}
          </Box>

        </Box>
      ))

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
export default connect(mapStateToProps)(CardProjects);
