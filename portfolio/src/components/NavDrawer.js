import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
    const arrayNavLinksText = ['Inicio', 'Sobre', 'Projetos'];
    const arrayNavLinks = ['/', '/about', '/projects'];
    const arrayIcons = [
      <HomeIcon fontSize="large" />,
      <AssignmentIndIcon fontSize="large" />,
      <SettingsEthernetIcon fontSize="large" />
    ];
    const arraySocialIcons = [
      <ListemItemButtonCustom><LinkedInIcon fontSize="large" sx={{ m: '1rem' }} /></ListemItemButtonCustom>,
      <ListemItemButtonCustom><GitHubIcon fontSize="large" sx={{ m: '1rem' }} /></ListemItemButtonCustom>
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
                  <Typography variant="h5" fontFamily='Hack'>{text}</Typography>
                </Link>
              </ListemItemButtonCustom>

            </ListItem>
          ))}
        </List>
        <ListItemIcon sx={{ mt: '5rem' }}>
          {arraySocialIcons.map((social) => social)}
        </ListItemIcon>
      </Box >
    )
  }
}

export default NavDrawer;
