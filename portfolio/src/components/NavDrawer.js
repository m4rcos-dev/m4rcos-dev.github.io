import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { dataNavDrawerLeft } from "../data/dataDrawerLeft";
import theme from "../style/Theme";

class NavDrawer extends React.Component {

  render() {
    const { currentTheme, currentUrl, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    const currentSizeIcons = currentScreen.width <= values.md2 ? 'medium' : 'large';
    const currentFontSize = currentScreen.width <= values.md2 ? '1rem' : '1.5rem';
    
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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ mb: '3rem', mt: '9rem', }}>
          {dataNavDrawerLeft(currentUrl, currentSizeIcons, currentFontSize).map((nav) => (
            <Link
              key={nav.linkText}
              to={nav.link}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListemItemButtonCustom
                selected={nav.slected}
                divider
                sx={{
                  fontFamily: 'Hack',
                  fontSize: nav.fontSize,
                  mb: '1rem',
                  color: `common.${currentTypography}`
                }}>
                {nav.icon}
                {nav.linkText}
              </ListemItemButtonCustom>
            </Link>
          ))}
        </List>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentUrl,
  ...state.currentScreen,
});

export default connect(mapStateToProps)(NavDrawer);
