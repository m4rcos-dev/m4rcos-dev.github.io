import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Link, styled } from "@mui/material";

const arrayNavLinksText = ['Inicio', 'Sobre', 'Projetos'];
const arrayIcons = [
  <HomeIcon fontSize="medium" />,
  <AssignmentIndIcon fontSize="medium" />,
  <SettingsEthernetIcon fontSize="medium" />
];

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
  const arrayNavLinks = ['#home', '#about', '#projects'];
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
        {arrayNavLinksText.map((page, index) => (
          <Link href={arrayNavLinks[index]} sx={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItemCustom key={page} onClick={handleCloseNavMenu}>
              {arrayIcons[index]}
              {page}
            </MenuItemCustom>
          </Link>
        ))}
      </Menu>
    </Box>
  )
}

export default NavAppBar;
