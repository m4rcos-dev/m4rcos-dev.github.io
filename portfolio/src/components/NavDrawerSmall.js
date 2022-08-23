import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';

class NavDrawerSmall extends React.Component {
  render() {
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

    const arrayNavLinksText = ['Inicio', 'Sobre', 'Projetos'];
    const arrayNavLinks = ['/', '/about', '/projects'];
    const arrayIcons = [
      <HomeIcon fontSize="medium" />,
      <AssignmentIndIcon fontSize="medium" />,
      <SettingsEthernetIcon fontSize="medium" />
    ];

    return (
      <BoxCustom sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {arrayNavLinksText.map((text, index) => (
            <Link to={arrayNavLinks[index]} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListemItemButtonCustom divider sx={{ fontFamily: 'Hack', fontSize: '1rem', mb: '1rem' }}>
                {arrayIcons[index]}
                {text}
              </ListemItemButtonCustom>
            </Link>
          ))}
        </List>
      </BoxCustom >
    )
  }
}

export default NavDrawerSmall;
