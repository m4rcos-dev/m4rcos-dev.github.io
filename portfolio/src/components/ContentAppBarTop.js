import { styled } from "@mui/material";
import React from "react";

class ContentAppBarTop extends React.Component {
  render() {
    //=============Breackpoints MediaQuery==================
    const BoxCustom = styled('div')(({ theme }) => ({
      [theme.breakpoints.up('md2')]: {
        display: 'none',
      },
    }));

    return (
      <BoxCustom sx={{
        width: '100%',
        height: '92vh',
        marginTop: '8vh',
        bgcolor: 'secondary.main',
      }}>
        Content
      </BoxCustom>
    )
  }
}

export default ContentAppBarTop;
