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
      <LinkedInIcon fontSize="large" />,
      <GitHubIcon fontSize="large" />
    ];
    return (
      <ListItemIcon>
        {arraySocialIcons.map((social, index) => <ListemItemButtonCustom
          key={`social${index}`}>{social}</ListemItemButtonCustom>)}
      </ListItemIcon>
    )
  }
}

export default NavSoicalMedia;
