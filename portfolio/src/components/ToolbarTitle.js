import { Toolbar, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TypographyCustom } from "../style/ToolbarTitleStyle";
// import { ToolbarCustom } from "../style/ToolbarStyle";

class ToolbarTitle extends React.Component {
  render() {
    return (
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', p: 4,
          mt: '4rem',
        }}
      >
        <ArrowBackIosIcon color='alternateColor1' fontSize="large" />
        <TypographyCustom variant="h4" fontFamily='Hack'>
          m4rcos.Dev
        </TypographyCustom>
        <Typography variant="h3" sx={{ color: 'alternateColor1.main', ml: 1 }}>/</Typography>
        <ArrowForwardIosIcon color='alternateColor1' fontSize="large"/>

      </Toolbar>
    )
  }
}

export default ToolbarTitle;
