import { Button, Link, styled, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { dataPageHome } from '../data/dataPageHome';
import theme from "../style/Theme";

class CardInfo extends Component {
  render() {
    // ============BreakPoints e ChangeTheme============
    const { currentScreen, currentTheme, colorChange } = this.props;
    const { breakpoints: { values } } = theme;
    const titleTypographySize = currentScreen.width <= values.md2 ? 'h4' : 'h2';
    const subTitleTypographySize = currentScreen.width <= values.md2 ? 'h6' : 'h4';
    const textTypographySize = currentScreen.width <= values.md2 ? 'h8' : 'h6';
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    //=============Breackpoints MediaQuery==================
    const BoxCustomText = styled('div')(({ theme }) => ({
      [theme.breakpoints.down('md3')]: {
        width: '100%',
        height: 'auto',
      },
    }));

    const ButtonCustom = styled(Button)(() => ({
      [theme.breakpoints.down('md2')]: {
        width: '40%',
        fontSize: '0.8rem',
      },
      [theme.breakpoints.down('md3')]: {
        width: '60%',
        fontSize: '1rem',
      },
    }));

    //==============styled Custom=============================
    const TypographyCustom = styled(Typography)(() => ({
      margin: '0rem 0rem 2rem 0rem'
    }));

    return (
      <BoxCustomText
        sx={{
          width: '50%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: '1rem 1rem 1rem 2rem',
        }}
      >
        <TypographyCustom
          fontFamily='Hack'
          variant={titleTypographySize}
          color={currentTypographyColor}
        >
          {dataPageHome().titleInfo}
        </TypographyCustom>
        <TypographyCustom
          fontFamily='Hack'
          variant={subTitleTypographySize}
          color={colorChange}
        >
          {dataPageHome().subTitleInfo}
        </TypographyCustom>
        <TypographyCustom
          fontFamily='Hack'
          variant={textTypographySize}
          color={currentTypographyColor}
        >
          {dataPageHome().textInfo}
        </TypographyCustom>
        <Link
          href={dataPageHome().buttonLink}
          target="_blank"
          sx={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
          <ButtonCustom
            variant="contained"
            sx={{
              width: '30%',
              bgcolor: colorChange,
              color: currentTypographyColor,
              fontFamily: 'Hack',
              fontWeight: 'bolder',
              '&:hover': {
                bgcolor: colorChange,
              }
            }}
          >
            {dataPageHome().buttonInfo}
          </ButtonCustom>
        </Link>
      </BoxCustomText>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default CardInfo

// ======export Redux=======
export default connect(mapStateToProps)(CardInfo);
