import { Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { connect } from 'react-redux';

class ToolbarTitle extends React.Component {
  render() {
    const { currentTheme } = this.props;
    const currentTypography = currentTheme === 'dark' ? 'white' : 'black'
    // ==============Animação Escrita==================
    const TypographyCustom = styled(Typography, currentTypography)`
border-right: 2px solid;
font-sizy: ${({ theme }) => theme.typography.h4}
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
    //=============Breackpoints MediaQuery==================
    const ToolbarCustom = styled(Toolbar)(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        display: 'none',
      },
    }));

    return (
      <ToolbarCustom
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', p: 4,
        }}
      >
        <ArrowBackIosIcon color='alternateColor1' fontSize="large" />
        <Box>
          <TypographyCustom fontFamily='Hack' sx={{ color: `common.${currentTypography}` }}>
            m4rcos.Dev
          </TypographyCustom>
        </Box>
        <Typography variant="h3" sx={{ color: 'alternateColor1.main', ml: 1 }}>/</Typography>
        <ArrowForwardIosIcon color='alternateColor1' fontSize="large" />
      </ToolbarCustom>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
});

export default connect(mapStateToProps)(ToolbarTitle);
