import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { dataNavDrawerLeft } from "../data/dataDrawerLeft";

class NavDrawer extends React.Component {
  render() {
    const { currentTheme, currentUrl } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
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
      '&.Mui-selected': {
        color: theme.palette.alternateColor1.main,
      }
    }));

    return (
      <BoxCustom sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {dataNavDrawerLeft(currentUrl, 'large').map((nav) => (
            <Link
              key={nav.linkText}
              to={nav.link}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListemItemButtonCustom
                selected={nav.slected}
                divider
                sx={{
                  fontFamily: 'Hack',
                  fontSize: '1.5rem',
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

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentUrl,
});

export default connect(mapStateToProps)(NavDrawer);
