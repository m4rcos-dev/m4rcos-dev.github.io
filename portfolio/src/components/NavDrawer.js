import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class NavDrawer extends React.Component {
  render() {
    const { currentTheme, currentUrl } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        display: 'none',
      },
    }));

    const ListemItemButtonCustom = styled(ListItemButton, currentTheme)(({ theme }) => ({
      cursor: 'crosshair',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&:hover': {
        color: theme.palette.alternateColor1.main,
      },
      '&.MuiListItemButton-divider': {
        borderColor: currentTheme === 'dark' ? '#ffffff1f' : '#0000001f',
      },
      '&.Mui-selected': {
        color: theme.palette.alternateColor1.main,
      }
    }));

    const dataNav = [
      {
        linkText: 'Inicio',
        link: '/',
        icon: <HomeIcon fontSize="large" />,
        slected: currentUrl === '/'
      },
      {
        linkText: 'Sobre',
        link: '/about',
        icon: <AssignmentIndIcon fontSize="large" />,
        slected: currentUrl === '/about'
      },
      {
        linkText: 'Projetos',
        link: '/projects',
        icon: <SettingsEthernetIcon fontSize="large" />,
        slected: currentUrl === '/projects'
      },
    ];

    return (
      <BoxCustom sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {dataNav.map((nav) => (
            <Link
              key={nav.linkText}
              to={nav.link}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListemItemButtonCustom
                selected={nav.slected}
                divider
                sx={{
                  fontFamily: 'Hack',
                  fontSize: '1.5rem',
                  mb: '1rem',
                  color: `common.${currentTypography}`
                }}>
                {nav.icon}
                {nav.linkText}
              </ListemItemButtonCustom>
            </Link>
          ))}
        </List>
      </BoxCustom >
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentUrl,
});

export default connect(mapStateToProps)(NavDrawer);
