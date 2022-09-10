import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grow, Link, styled } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import { connect } from "react-redux";
import { dataNavSocialMedia } from "../data/dataDrawerLeft";

class NavSoicalMedia extends React.Component {
  render() {
    const { currentTheme, colorChange } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    //=============Breackpoints MediaQuery==================
    const ListItemIconCustom = styled(ListItemIcon)(({ theme }) => ({
      [theme.breakpoints.down('md3')]: {
        flexDirection: 'column',
      },
    }));

    return (
      <ListItemIconCustom>
        {dataNavSocialMedia('large').map((social) =>
          <Grow
          in
          timeout={2000}
          >
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
            </Link>
          </Grow>)}
      </ListItemIconCustom>
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
