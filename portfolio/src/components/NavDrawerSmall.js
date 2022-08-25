import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { dataNavDrawerLeft } from "../data/DrawerLeft";

class NavDrawerSmall extends React.Component {
  render() {
    const { currentTheme, currentUrl } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled(Box)(({ theme }) => ({
      [theme.breakpoints.up('md2')]: {
        display: 'none',
      },
    }));

    const ListemItemButtonCustom = styled(ListItemButton, currentTheme)(({ theme }) => ({
      cursor: 'crosshair',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&:hover': {
        color: theme.palette.alternateColor1.main,
      },
      '&.MuiListItemButton-divider': {
        borderColor: currentTheme === 'dark' ? '#ffffff1f' : '#0000001f',
      },
    }));
    
    return (
      <BoxCustom sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {dataNavDrawerLeft(currentUrl, 'medium').map((nav) => (
            <Link key={nav.linkText} to={nav.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListemItemButtonCustom
                divider
                sx={{
                  fontFamily: 'Hack',
                  fontSize: '1.3rem',
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

