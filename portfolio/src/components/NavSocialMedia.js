import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link, styled } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import { connect } from "react-redux";
import { dataNavSocialMedia } from "../data/dataDrawerLeft";

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
        {dataNavSocialMedia('large').map((social) =>
          <Link
            key={social.id}
            href={social.link}
            target="_blank"
            sx={{
              textDecoration: 'none',
              color: 'inherit'
            }}>
            <ListemItemButtonCustom
              sx={{ color: `common.${currentTypography}` }}
            >{social.icon}
            </ListemItemButtonCustom>
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
