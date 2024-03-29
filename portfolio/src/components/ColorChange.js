import React from 'react';
import { Box, Grow, SpeedDial, SpeedDialAction } from "@mui/material";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { dataColorChange } from '../data/dataControlPanel';


// =====import Redux=========
import { connect } from 'react-redux'
import { colorChange } from "../redux/actions/changeColor";

class ColorChange extends React.Component {
  constructor() {
    super()
    this.state = {
      currentColor: 'alternateColor.orange'
    }
  }

  componentDidMount() {
    localStorage.getItem('currentColor') === null
      ? this.setState({ currentColor: 'alternateColor.orange' })
      : this.setState({ currentColor: localStorage.getItem('currentColor') })
  }

  handleColor = ({ target: { name } }) => {
    // =========utilizando localStorage==================
    this.setState({ currentColor: name });
    localStorage.setItem('currentColor', name);

    // =========utilizando Redux==================
    const { dispatch } = this.props;
    dispatch(colorChange({ colorChange: name }))
  }

  render() {
    const { currentColor } = this.state;
    return (
      <Box sx={{ mt: '0.5rem', mr: '1.6rem' }}>
        <Grow
          in
          timeout={2000}
        >
            <SpeedDial
              ariaLabel="SpeedDial playground example"
              icon={<ColorLensIcon sx={{ color: 'common.white' }} />}
              direction='left'
              sx={{
                '& .MuiSpeedDial-fab': {
                  bgcolor: currentColor,
                  width: '2.25rem',
                  height: '2.25rem',
                },
                '& .MuiSpeedDial-fab:hover': {
                  bgcolor: currentColor,
                },
              }}
            >
              {dataColorChange().map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  name={action.color}
                  sx={{
                    color: action.color,
                    bgcolor: action.color,
                    width: '2.25rem',
                    height: '2.25rem',
                    '&:hover': {
                      bgcolor: action.color,
                      opacity: 0.5
                    },
                    '& .MuiSvgIcon-root': {
                      display: 'none'
                    },
                  }}
                  onClick={(event) => this.handleColor(event)}
                />
              ))}
            </SpeedDial>
        </Grow>
      </Box>
    )
  }
}

// export default ColorChange;

// ======export Redux=======
export default connect()(ColorChange);
