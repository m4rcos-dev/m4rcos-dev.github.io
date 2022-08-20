import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { Box, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

class NavDrawer extends React.Component {
  render() {
    const ListemItemButtonCustom = styled(ListItemButton)`
    ${({ theme }) => `
    cursor: crosshair;
    justify-content: center;
    &:hover {
      color: ${theme.palette.alternateColor1.main};
    }
    `}
    `
    const TypographyCustom = styled(Typography)`
    ${({ theme }) => `
    cursor: crosshair;
    justify-content: center;
    &:hover {
      color: ${theme.palette.alternateColor1.main};
    }
    `}
    `
    const arrayNavLinksText = ['Inicio', 'Sobre', 'Projetos'];
    const arrayNavLinks = ['/', '/about', '/projects'];
    const arrayIcons = [
      <HomeIcon fontSize="large" />,
      <AssignmentIndIcon fontSize="large" />,
      <SettingsEthernetIcon fontSize="large" />
    ];

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {arrayNavLinksText.map((text, index) => (
            <ListItem key={text}>

              <ListemItemButtonCustom divider>
                <Link to={arrayNavLinks[index]} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListemItemButtonCustom>
                    {arrayIcons[index]}
                  </ListemItemButtonCustom>
                  <TypographyCustom variant="h5" fontFamily='Hack'>{text}</TypographyCustom>
                </Link>
              </ListemItemButtonCustom>

            </ListItem>
          ))}
        </List>
      </Box >
    )
  }
}

export default NavDrawer;
