import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import { connect } from "react-redux";
import { dataNavSocialMedia } from "../data/dataDrawerLeft";

class NavSoicalMedia extends React.Component {
  render() {
    const { currentTheme, colorChange } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'

    return (
      <ListItemIcon>
        {dataNavSocialMedia('large').map((social) =>
          <Link
            key={social.id}
            href={social.link}
            target="_blank"
            sx={{
              textDecoration: 'none',
              color: 'inherit'
            }}>
            <ListItemButton
              sx={{
                color: `common.${currentTypography}`,
                cursor: 'crosshair',
                justifyContent: 'center',
                '&:hover': {
                  color: colorChange
                }
              }}
            >{social.icon}
            </ListItemButton>
          </Link>)}
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
