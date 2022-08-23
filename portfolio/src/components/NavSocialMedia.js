import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';

class NavSoicalMedia extends React.Component {
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

    const arraySocialIcons = [
      <ListemItemButtonCustom><LinkedInIcon fontSize="large" /></ListemItemButtonCustom>,
      <ListemItemButtonCustom><GitHubIcon fontSize="large" /></ListemItemButtonCustom>
    ];
    return (
      <ListItemIcon>
        {arraySocialIcons.map((social) => social)}
      </ListItemIcon>
    )
  }
}

export default NavSoicalMedia;
