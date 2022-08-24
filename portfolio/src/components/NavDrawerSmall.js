import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class NavDrawerSmall extends React.Component {
  render() {
    const { currentTheme } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled(Box)(({ theme }) => ({
      [theme.breakpoints.up('md2')]: {
        display: 'none',
      },
    }));

    const ListemItemButtonCustom = styled(ListItemButton)`
    ${({ theme }) => `
    cursor: crosshair;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover {
      color: ${theme.palette.alternateColor1.main};
    }
    `}
    `

    const dataNav = [
      { linkText: 'Inicio', link: '/', icon: <HomeIcon fontSize="large" /> },
      { linkText: 'Sobre', link: '/about', icon: <AssignmentIndIcon fontSize="large" /> },
      { linkText: 'Projetos', link: '/projects', icon: <SettingsEthernetIcon fontSize="large" /> },
    ];

    return (
      <BoxCustom sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {dataNav.map((nav) => (
            <Link key={nav.linkText} to={nav.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListemItemButtonCustom
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

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
});

// export default NavDrawerSmall;

//============export Redux==========================
export default connect(mapStateToProps)(NavDrawerSmall);
