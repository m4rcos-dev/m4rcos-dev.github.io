import { Box, Typography } from '@mui/material';
import React, { Component } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { connect } from 'react-redux';
import { dataExperienceTimeLine } from '../data/dataPageAbout';

class ExperienceTimeLine extends Component {
  render() {
    const { colorChange, currentTheme } = this.props;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    return (
      <Box sx={{
        width: '40%',
        m: '2rem 0rem 0rem 1rem',
      }}>
        {dataExperienceTimeLine(colorChange, 'large').head.map((academic) => (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {academic.icon}
            <Typography
              variant='h4'
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >{academic.title}</Typography>
          </Box>
        ))}

        <Box
          sx={{
            height: '1216px',
            m: '0.5rem 0rem 0rem 0rem',
            p: '0rem 0rem 1rem 0rem',
            bgcolor: `primary.${currentTheme}`,
            borderRadius: '0.7rem',
            boxShadow: '2'
          }}
        >
          {dataExperienceTimeLine().body.map((academic) => (
            <Timeline>
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
                    fontFamily='Hack'
                    sx={{
                      color: `common.${currentTypographyColor}`,
                    }}
                  >{academic.text}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
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

// export default ExperienceTimeLine;

// ======export Redux=======
export default connect(mapStateToProps)(ExperienceTimeLine);

