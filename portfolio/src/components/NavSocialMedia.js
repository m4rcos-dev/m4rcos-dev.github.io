import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import { connect } from "react-redux";
import { dataNavSocialMedia } from "../data/DrawerLeft";

class NavSoicalMedia extends React.Component {
  render() {
    const { currentTheme } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    const ListemItemButtonCustom = styled(ListItemButton)`
    ${({ theme }) => `
    cursor: crosshair;
    justify-content: center;
    &:hover {
      color: ${theme.palette.alternateColor1.main};
    }
    `}
    `

    return (
      <ListItemIcon>
        {dataNavSocialMedia('large').map((social, index) => <ListemItemButtonCustom
          key={`social${index}`}
          sx={{ color: `common.${currentTypography}` }}
        >{social.icon}
        </ListemItemButtonCustom>)}
      </ListItemIcon>
    )
  }
}

// =======props Redux===============================
const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
});

// export default NavSoicalMedia;

//============export Redux==========================
export default connect(mapStateToProps)(NavSoicalMedia);
