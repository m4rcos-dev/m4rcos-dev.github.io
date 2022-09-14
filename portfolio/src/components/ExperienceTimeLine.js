import { Box, Typography } from '@mui/material';
import React, { Component } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { connect } from 'react-redux';

class ExperienceTimeLine extends Component {
  render() {
    const { colorChange, currentTheme } = this.props;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    return (
      <Box sx={{
        width: '40%',
        m: '2rem 0rem 0rem 1rem',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <AssignmentIndIcon sx={{
            color: colorChange,
          }}
            fontSize='large'
          />
          <Typography
            variant='h4'
            fontFamily='Hack'
            sx={{
              width: '100%',
              m: '0rem 0rem 0rem 1rem',
              color: colorChange,
            }}
          >Experiência Profissional</Typography>
        </Box>
        <Box
          sx={{
            m: '0.5rem 0rem 0rem 0rem',
            bgcolor: `primary.${currentTheme}`,
            borderRadius: '0.7rem',
            boxShadow: '2'
          }}
        >
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
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  fontFamily='Hack'
                  sx={{
                    color: colorChange,
                  }}
                >Teste</Typography>
                <Typography
                  fontFamily='Hack'
                  sx={{
                    color: `common.${currentTypographyColor}`,
                  }}
                >Teste2</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
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

