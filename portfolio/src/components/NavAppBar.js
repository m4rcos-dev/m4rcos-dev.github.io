import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from "@mui/material";
import { dataAppBarTop } from "../data/dataAppBarTop";
import { Link } from 'react-router-dom';

const MenuItemCustom = styled(MenuItem)`
${({ theme }) => `
cursor: crosshair;
font-family: Hack;
&:hover {
  color: ${theme.palette.alternateColor1.main};
}
`}
`

const NavAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon sx={{ color: 'alternateColor1.main' }} />
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
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {dataAppBarTop('medium').map((page) => (
          <Link
            key={page.id}
            to={page.link}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItemCustom onClick={handleCloseNavMenu}>
              {page.icon}
              {page.text}
            </MenuItemCustom>
          </Link>
        ))}
      </Menu>
    </Box>
  )
}

export default NavAppBar;
