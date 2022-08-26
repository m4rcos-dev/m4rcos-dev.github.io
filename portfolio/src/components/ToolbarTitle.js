import { Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { connect } from 'react-redux';
import theme from "../style/Theme";

class ToolbarTitle extends React.Component {
  render() {
    const { currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    const currentTypographySize = currentScreen.width <= values.md2 ? 'h4' : 'h3';
    const currentTypographyCustomSize = currentScreen.width <= values.md2 ? theme.typography.h5 : theme.typography.h4;
    const currentFontSize = currentScreen.width <= values.md2 ? 'small' : 'large';

    // ==============Animação Escrita==================
    const TypographyCustom = styled(Typography, currentTypography)`
border-right: 2px solid;
font-sizy: ${() => currentTypographyCustomSize}
animation: blinkCursor 500ms steps(30) infinite normal, typing 1s steps(15) 1s normal both;
overflow: hidden;
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 6em;
  }
}

@keyframes blinkCursor {
  from {
    border-right-color: ${({ theme }) => `theme.palette.common.${currentTypography}`};
  }
  to {
    border-right-color: transparent;
  }
}
`
    return (
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', p: 4,
        }}
      >
        <ArrowBackIosIcon color='alternateColor1' fontSize={currentFontSize} />
        <Box>
          <TypographyCustom fontFamily='Hack' sx={{ color: `common.${currentTypography}` }}>
            m4rcos.Dev
          </TypographyCustom>
        </Box>
        <Typography variant={currentTypographySize} sx={{ color: 'alternateColor1.main', ml: 1 }}>/</Typography>
        <ArrowForwardIosIcon color='alternateColor1' fontSize={currentFontSize} />
      </Toolbar>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
});

export default connect(mapStateToProps)(ToolbarTitle);
