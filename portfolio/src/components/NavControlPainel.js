import { Box, IconButton } from '@mui/material';
import React, { Component } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import ControlPanel from './ControlPanel';
import { connect } from 'react-redux';

class NavControlPainel extends Component {
  constructor() {
    super();
    this.state = {
      controPainelDisplay: 'none'
    }
  }

  handleOpenControPainel = () => {
    const { controPainelDisplay } = this.state;
    const validDisplay = controPainelDisplay === 'none'
      ? '' : 'none';
    this.setState({ controPainelDisplay: validDisplay })
  };

  render() {
    const { controPainelDisplay } = this.state;
    const { colorChange } = this.props;
    return (
      <Box sx={{ display: 'flex' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={this.handleOpenControPainel}
          color="inherit"
        >
          <SettingsIcon sx={{ color: colorChange }} />
        </IconButton>
        <Box sx={{
          display: controPainelDisplay,
        }}>
          <ControlPanel />
        </Box>
      </Box>
    )
  }
}
// =======props Redux=======================
const mapStateToProps = (state) => ({
  ...state.colorChange
})

// export default NavControlPainel;

export default connect(mapStateToProps)(NavControlPainel);
