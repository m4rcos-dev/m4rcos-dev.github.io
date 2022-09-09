import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/material";
import { dataAppBarTop } from "../data/dataAppBarTop";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const MenuItemCustom = styled(MenuItem)`
${({ theme }) => `
cursor: crosshair;
font-family: Hack;
&:hover {
  color: ${theme.palette.alternateColor1.main};
}
`}
`

class NavAppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorElNav: null,
    }
  }

  handleOpenNavMenu = (event) => {
    this.setState({ anchorElNav: event.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null })
  };

  render() {
    const { anchorElNav } = this.state;
    const { colorChange } = this.props;
    return (
      <Box sx={{ display: 'flex' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={this.handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon sx={{ color: colorChange }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={this.handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {dataAppBarTop('medium').map((page) => (
            <Link
              key={page.id}
              to={page.link}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItemCustom onClick={this.handleCloseNavMenu}>
                {page.icon}
                {page.text}
              </MenuItemCustom>
            </Link>
          ))}
        </Menu>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentUrl,
  ...state.currentScreen,
});

// export default NavAppBar;

export default connect(mapStateToProps)(NavAppBar);
