import { Box, Typography } from '@mui/material';
import React, { Component } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { connect } from 'react-redux';

class AcademicTimeLine extends Component {
  render() {
    const { colorChange, currentTheme } = this.props;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    return (
      <Box
        sx={{
          width: '30%',
          m: '2rem',
          bgcolor: `primary.${currentTheme}`,
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
                sx={{
                  color: colorChange,
                }}
              >Teste</Typography>
              <Typography
                sx={{
                  color: `common.${currentTypographyColor}`,
                }}
              >Teste2</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
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

// export default AcademicTimeLine;

// ======export Redux=======
export default connect(mapStateToProps)(AcademicTimeLine);
