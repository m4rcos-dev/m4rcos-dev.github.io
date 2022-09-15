import { Avatar, Box, Typography } from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import AvatarImg from '../assets/avatarImg.png'
import LogoHtml from '../assets/logoHtml.svg'
import LogoCss from '../assets/logoCss.svg'
import LogoJavaScript from '../assets/logoJavaScript.svg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ComputerIcon from '@mui/icons-material/Computer';

class AvatarCardAbout extends Component {
  render() {
    const { currentTheme, colorChange } = this.props;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    return (
      <Box
        sx={{
          maxWidth: '87%',
          height: '50vh',
          m: '2rem 0rem 0rem 0rem',
          bgcolor: `primary.${currentTheme}`,
          borderRadius: '0.7rem',
          boxShadow: '2',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            m: '1rem 0rem 0rem 2rem'
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <EmojiEmotionsIcon sx={{
              color: colorChange,
            }}
              fontSize='medium'
            />
            <Typography
              variant='h5'
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >Bio</Typography>
          </Box>
          <Box
            sx={{
              m: '0.5rem 0rem 1rem 0rem'
            }}
          >
            <Typography
              fontFamily='Hack'
              variant='h7'
              sx={{
                color: `common.${currentTypographyColor}`,
              }}
            >
              Facinado por desafio, encontrei na TI a área ideal, estudando e trabalhando na area desde os 15 anos de idade, já foi professor, técnico em informática, empreendedor, técnico em eletronica e reparo em celularers, streamer, criador de conteúdo digital, e atualmente desenvolvedor Front-End cursando Back-end e almejando o desenvolvimento Full Stack.
              <br />
              Casado, pai de dois filhos que me motivam todos os dias a dar o meu máximo e claro um sonhador correndo atras de seus objetivos....
              <br />
              Precisa de um DEV? Vamos trabalhar juntos....
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ComputerIcon sx={{
              color: colorChange,
            }}
              fontSize='medium'
            />
            <Typography
              variant='h5'
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}
            >Tecnologias</Typography>
          </Box>
          <Box
            sx={{
              m: '1rem 0rem 1rem 0rem'
            }}
          >
            <img
              alt='html
            logo' src={LogoHtml}
              style={{
                width: '50px',
                height: '50px',
              }}
            />
            <img
              alt='css
            logo' src={LogoCss}
              style={{
                width: '50px',
                height: '50px',
              }}
            />
            <img
              alt='javaScript
            logo' src={LogoJavaScript}
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </Box>
        </Box>
        <Avatar
          alt="avatar"
          variant="rounded"
          src={AvatarImg}
          sx={{
            width: '190px',
            height: '190px',
            m: '0rem 2rem 0rem 2rem',
            boxShadow: '9',
          }}
        />
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default AvatarCardAbout;

// ======export Redux=======
export default connect(mapStateToProps)(AvatarCardAbout);
