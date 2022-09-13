import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide'
import theme from "../style/Theme";
import ImageOrange from "../assets/orange.svg"
import ImageRed from "../assets/red.svg"
import ImageGreen from "../assets/green.svg"
import ImageBlue from "../assets/blue.svg"
import ImageInsta from "../assets/insta.svg"
import ImageYoutube from "../assets/youtube.svg"
import ImageTwitter from "../assets/twitter.svg"
import "../style/HomeAnimation.css"

// =====import Redux=========
import { connect } from 'react-redux'
import { currentUrl } from "../redux/actions/currentUrl";

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currentUrl({ currentUrl: window.location.pathname }))
  }
  render() {
    // ============BreakPoints e ChangeTheme============
    const { currentScreen, currentTheme, colorChange } = this.props;
    const { breakpoints: { values } } = theme;
    const currentSlideDirection = currentScreen.width <= values.md3 ? 'up' : 'left';
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

    const BoxCustomImage = styled('div')(({ theme }) => ({
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

    const ImgCustomAvatar = styled('img')(() => ({
      [theme.breakpoints.down('md2')]: {
        width: '412px',
      },
      [theme.breakpoints.down('md3')]: {

      },
    }));

    //==============styled Custom=============================
    const TypographyCustom = styled(Typography)(() => ({
      margin: '0rem 0rem 2rem 0rem'
    }));



    return (
      <Slide direction={currentSlideDirection} in mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
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
              Olá! Eu sou o
            </TypographyCustom>
            <TypographyCustom
              fontFamily='Hack'
              variant={subTitleTypographySize}
              color={colorChange}
            >
              Marcos Paulo Pereira
            </TypographyCustom>
            <TypographyCustom
              fontFamily='Hack'
              variant={textTypographySize}
              color={currentTypographyColor}
            >
              Desenvolvedor Front-end, com muita disposição e vontade de aprender, acrescentar e evoluir. Cursando Back-end e almejando o desenvolvimento Full Stack.
            </TypographyCustom>
            <ButtonCustom
              variant="contained"
              sx={{
                width: '30%',
                bgcolor: colorChange,
                color: currentTypographyColor,
                fontFamily: 'Hack',
                fontWeight: 'bolder',
                zIndex: 'mobileStepper',
                '&:hover': {
                  bgcolor: colorChange,
                }
              }}
            >
              Baixar Curriculo
            </ButtonCustom>
          </BoxCustomText>
          <BoxCustomImage
            sx={{
              width: '50%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {currentScreen.width > values.md2
              && <img class="vibrate-1 jello-horizontal" style={{
                margin: '13rem 0rem 0rem 0rem',
                position: 'absolute',
              }} src={ImageInsta} alt="insta" />}
            {currentScreen.width <= values.md2
              && <img class="vibrate-1 jello-horizontal" style={{
                margin: '13rem 0rem 0rem 0rem',
                position: 'absolute',
              }} src={ImageInsta} alt="insta" />}

            {currentScreen.width > values.md2
              && <img class="vibrate-2 jello-horizontal" style={{
                maxWidth: '119px',
                position: 'absolute',
                margin: '8rem 0rem 0rem 28rem',
              }} src={ImageYoutube} alt="youtube" />}
            {currentScreen.width <= values.md2
              && <img class="vibrate-2 jello-horizontal" style={{
                maxWidth: '119px',
                position: 'absolute',
                margin: '8rem 0rem 0rem 20rem',
              }} src={ImageYoutube} alt="youtube" />}

            {currentScreen.width > values.md2
              && <img class="vibrate-3 jello-horizontal" style={{
                maxWidth: '119px',
                position: 'absolute',
                margin: '47rem 0rem 0rem 6rem',
              }} src={ImageTwitter} alt="twitter" />}
            {currentScreen.width <= values.md2
              && <img class="vibrate-3 jello-horizontal" style={{
                maxWidth: '119px',
                position: 'absolute',
                margin: '5rem 0rem 0rem 6rem',
              }} src={ImageTwitter} alt="twitter" />}


            {colorChange === 'alternateColor.orange'
              && <ImgCustomAvatar style={{
                maxWidth: '612px',
                margin: '10rem 0rem 0rem 0rem',
              }} src={ImageOrange} alt="img Portifólio" />}
            {colorChange === 'alternateColor.red'
              && <img style={{
                maxWidth: '612px',
                margin: '10rem 0rem 0rem 0rem',
              }} src={ImageRed} alt="img Portifólio2" />}
            {colorChange === 'alternateColor.green'
              && <img style={{
                maxWidth: '612px',
                margin: '10rem 0rem 0rem 0rem',
              }} src={ImageGreen} alt="img Portifólio2" />}
            {colorChange === 'alternateColor.blue'
              && <img style={{
                maxWidth: '612px',
                margin: '10rem 0rem 0rem 0rem',
              }} src={ImageBlue} alt="img Portifólio2" />}
          </BoxCustomImage>
        </Box>
      </Slide>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
});

// export default Home;

// ======export Redux=======
export default connect(mapStateToProps)(Home);
