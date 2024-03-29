import { Box, Tooltip, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
// import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import theme from '../style/Theme';
import { dataStackCardAbout } from '../data/dataPageAbout';
import { styled } from '@mui/system';

export class StacksCardAbout extends Component {
  render() {
    const { colorChange, currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';

    //=============Breackpoints MediaQuery==================
    const BoxCustomCards = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
      },
      [theme.breakpoints.down('md3')]: {
        flexDirection: 'column',
        with: '100%'
      },
    }));

    const BoxCustomBackgroundCards = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
      },
      [theme.breakpoints.down('md3')]: {
        width: '100%',
      },
    }));

    return (
      <Box
        sx={{
          width: '87%',
          m: '2rem 0rem 0rem 0rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {dataStackCardAbout(colorChange, currentIconTitleSize).head.map((head) => (
          <Box key={head.id} sx={{
            m: '0rem 0rem 0rem 1rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {head.icon}
            <Typography
              variant={currentTypographyTitleSize}
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >{head.title}</Typography>
          </Box>
        ))}

        <BoxCustomCards
          sx={{
            width: '100%',
            display: 'flex',
          }}
        >
          {dataStackCardAbout().languagesAndTools.map((tools) => (
            <BoxCustomBackgroundCards
              key={tools.id}
              sx={{
                width: '33%',
                m: '2rem 2rem 0rem 0rem',
                p: '0rem 0rem 1rem 0rem',
                bgcolor: `primary.${currentTheme}`,
                borderRadius: '0.7rem',
                boxShadow: '2'
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography
                  variant={currentTypographyTitleSize}
                  fontFamily='Hack'
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    m: '1rem 1rem 0rem 1rem',
                    color: colorChange,
                  }}
                >{tools.title}</Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '80%',
                  m: '0rem 0rem 2rem 2rem',
                  justifyContent: 'center',
                }}
              >
                {tools.icons.map((icon) => (
                  <Box
                    key={icon.name}
                    sx={{
                      m: '1rem 0rem 1rem 1rem',
                    }}
                  >
                    <Tooltip title={icon.name}>
                      <img
                        alt={icon.name}
                        className='drop-shadow-svg'
                        src={icon.src}
                        style={{
                          width: '40px',
                          height: '40px',
                          margin: '0rem 0.2rem 0rem 0.2rem'
                        }}
                      />
                    </Tooltip>
                  </Box>
                ))}
              </Box>
            </BoxCustomBackgroundCards>
          ))}

          {dataStackCardAbout().frontEnd.map((tools) => (
            <BoxCustomBackgroundCards
              key={tools.id}
              sx={{
                width: '33%',
                m: '2rem 2rem 0rem 0rem',
                p: '0rem 0rem 1rem 0rem',
                bgcolor: `primary.${currentTheme}`,
                borderRadius: '0.7rem',
                boxShadow: '2'
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography
                  variant={currentTypographyTitleSize}
                  fontFamily='Hack'
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    m: '1rem 1rem 0rem 1rem',
                    color: colorChange,
                  }}
                >{tools.title}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '80%',
                  m: '0rem 0rem 2rem 2rem',
                  justifyContent: 'center',
                }}
              >
                {tools.icons.map((icon) => (
                  <Box
                    key={icon.name}
                    sx={{
                      m: '1rem 0rem 1rem 1rem'
                    }}
                  >
                    <Tooltip title={icon.name}>
                      <img
                        alt={icon.name}
                        className='drop-shadow-svg'
                        src={icon.src}
                        style={{
                          width: '40px',
                          height: '40px',
                          margin: '0rem 0.2rem 0rem 0.2rem'
                        }}
                      />
                    </Tooltip>
                  </Box>
                ))}
              </Box>
            </BoxCustomBackgroundCards>
          ))}

          {dataStackCardAbout().backEnd.map((tools) => (
            <BoxCustomBackgroundCards
              key={tools.id}
              sx={{
                width: '33%',
                m: '2rem 0rem 0rem 0rem',
                p: '0rem 0rem 1rem 0rem',
                bgcolor: `primary.${currentTheme}`,
                borderRadius: '0.7rem',
                boxShadow: '2'
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography
                  variant={currentTypographyTitleSize}
                  fontFamily='Hack'
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    m: '1rem 1rem 0rem 1rem',
                    color: colorChange,
                  }}
                >{tools.title}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '80%',
                  m: '0rem 0rem 2rem 2rem',
                  justifyContent: 'center',
                }}
              >
                {tools.icons.map((icon) => (
                  <Box
                    key={icon.name}
                    sx={{
                      m: '1rem 0rem 1rem 1rem'
                    }}
                  >
                    <Tooltip title={icon.name}>
                      <img
                        alt={icon.name}
                        className='drop-shadow-svg'
                        src={icon.src}
                        style={{
                          width: '40px',
                          height: '40px',
                          margin: '0rem 0.2rem 0rem 0.2rem'
                        }}
                      />
                    </Tooltip>
                  </Box>
                ))}
              </Box>
            </BoxCustomBackgroundCards>
          ))}
        </BoxCustomCards>
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

// export default StacksCardAbout;

// ======export Redux=======
export default connect(mapStateToProps)(StacksCardAbout);
