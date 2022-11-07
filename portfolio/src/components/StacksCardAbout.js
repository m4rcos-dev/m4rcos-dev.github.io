import { Box, Tooltip, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
// import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import theme from '../style/Theme';
import { dataStackCardAbout } from '../data/dataPageAbout';

export class StacksCardAbout extends Component {
  render() {
    const { colorChange, currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';
    return (
      <Box>
        {dataStackCardAbout(colorChange, currentIconTitleSize).head.map((head) => (
          <Box key={head.id} sx={{
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

        <Box
        sx={{
          display: 'flex',
        }}
        >
          {dataStackCardAbout().languagesAndTools.map((tools) => (
            <Box
              sx={{
                m: '0.5rem 0rem 0rem 0rem',
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
                    width: '100%',
                    m: '0rem 1rem 0rem 1rem',
                    color: colorChange,
                  }}
                >{tools.title}</Typography>
              </Box>
              {tools.icons.map((icon) => (
                <Box
                  sx={{
                    m: '1rem 0rem 1rem 0rem'
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
          ))}

          {dataStackCardAbout().frontEnd.map((tools) => (
            <Box
              sx={{
                m: '0.5rem 0rem 0rem 0rem',
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
                    width: '100%',
                    m: '0rem 1rem 0rem 1rem',
                    color: colorChange,
                  }}
                >{tools.title}</Typography>
              </Box>
              {tools.icons.map((icon) => (
                <Box
                  sx={{
                    m: '1rem 0rem 1rem 0rem'
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
          ))}

          {dataStackCardAbout().backEnd.map((tools) => (
            <Box
              sx={{
                m: '0.5rem 0rem 0rem 0rem',
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
                    width: '100%',
                    m: '0rem 1rem 0rem 1rem',
                    color: colorChange,
                  }}
                >{tools.title}</Typography>
              </Box>
              {tools.icons.map((icon) => (
                <Box
                  sx={{
                    m: '1rem 0rem 1rem 0rem'
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
          ))}
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

// export default StacksCardAbout;

// ======export Redux=======
export default connect(mapStateToProps)(StacksCardAbout);
