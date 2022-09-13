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
    const { currentScreen, currentTheme, colorChange } = this.props;
    const { breakpoints: { values } } = theme;
    const currentSlideDirection = currentScreen.width <= values.md3 ? 'up' : 'left';
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'

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
          <Box
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
              variant="h2"
              color={currentTypographyColor}
            >
              Olá! Eu sou o
            </TypographyCustom>
            <TypographyCustom
              fontFamily='Hack'
              variant="h4"
              color={colorChange}
            >
              Marcos Paulo Pereira
            </TypographyCustom>
            <TypographyCustom
              fontFamily='Hack'
              variant="h6"
              color={currentTypographyColor}
            >
              Desenvolvedor Front-end, com muita disposição e vontade de aprender, acrescentar e evoluir. Cursando Back-end e almejando o desenvolvimento Full Stack.
            </TypographyCustom>
            <Button
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
              Baixar Curriculo
            </Button>
          </Box>
          <Box
            sx={{
              width: '50%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img class="vibrate-1 jello-horizontal" style={{
              maxWidth: '119px',
              position: 'fixed',
              margin: '13rem 0rem 0rem 0rem',
            }} src={ImageInsta} alt="insta" />
            <img class="vibrate-2 jello-horizontal" style={{
              maxWidth: '119px',
              position: 'fixed',
              margin: '8rem 0rem 0rem 28rem',
            }} src={ImageYoutube} alt="youtube" />
            <img class="vibrate-3 jello-horizontal" style={{
              maxWidth: '119px',
              position: 'fixed',
              margin: '47rem 0rem 0rem 6rem',
            }} src={ImageTwitter} alt="twitter" />

            {colorChange === 'alternateColor.orange'
              && <img style={{
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
          </Box>
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
