import { Box, styled, Typography } from '@mui/material';
import React, { Component } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { connect } from 'react-redux';
import { dataExperienceTimeLine } from '../data/dataPageAbout';
import theme from "../style/Theme";

class ExperienceTimeLine extends Component {
  render() {
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        width: '87%',
      },
      [theme.breakpoints.down('md3')]: {

      },
    }));

    const BoxCustomBg = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        height: 'auto',
      },
      [theme.breakpoints.down('md3')]: {

      },
    }));
    const { colorChange, currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    const currentTypographySize = currentScreen.width <= values.md2 ? 'body2' : 'h7';
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';
    return (
      <BoxCustom sx={{
        width: '40%',
        m: '2rem 0rem 0rem 1rem',
      }}>
        {dataExperienceTimeLine(colorChange, currentIconTitleSize).head.map((academic) => (
          <Box key={`${academic.title}:${academic.id}`} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {academic.icon}
            <Typography
              variant={currentTypographyTitleSize}
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >{academic.title}</Typography>
          </Box>
        ))}

        <BoxCustomBg
          sx={{
            // height: '1237px',
            m: '0.5rem 0rem 2rem 0rem',
            p: '0rem 0rem 1rem 0rem',
            bgcolor: `primary.${currentTheme}`,
            borderRadius: '0.7rem',
            boxShadow: '2',
          }}
        >
          {dataExperienceTimeLine().body.map((academic) => (
            <Timeline key={`${academic.title}:${academic.id}`}>
              <TimelineItem
                sx={{
                  '&::before': {
                    display: 'none',
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot sx={{
                    bgcolor: colorChange,
                  }} />
                  <TimelineConnector
                    sx={{
                      bgcolor: colorChange,
                      m: '0rem 0rem -1.5rem 0rem'
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    fontFamily='Hack'
                    sx={{
                      color: colorChange,
                    }}
                  >{academic.title}</Typography>
                  <Typography
                    fontFamily='Hack'
                    variant='h6'
                    sx={{
                      color: colorChange,
                      fontWeight: 'bolder',
                    }}
                  >{academic.institution}</Typography>
                  <Typography
                    fontFamily='Hack'
                    sx={{
                      color: colorChange,
                    }}
                  >{academic.subTitle}</Typography>
                  <Typography
                    variant={currentTypographySize}
                    fontFamily='Hack'
                    sx={{
                      color: `common.${currentTypographyColor}`,
                    }}
                  >{academic.text}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        </BoxCustomBg>
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

// export default ExperienceTimeLine;

// ======export Redux=======
export default connect(mapStateToProps)(ExperienceTimeLine);

