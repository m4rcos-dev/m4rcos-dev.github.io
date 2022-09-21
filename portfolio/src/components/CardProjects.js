import { Backdrop, Box, Button, Link, styled, Typography } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import theme from '../style/Theme';
import IconsProgress from './IconsProgress';
import { dataProjects } from '../data/dataPageProjects';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';

class CardProjects extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      currrentAlt: '',
      arrayMedia: [],
      currentImage: 0,
      currentLengthImage: 0,
    }
  }

  handleClose = () => {
    this.setState({ open: false, currentImage: 0 })
  };

  handleToggle = ({ target }) => {
    const { open } = this.state;
    const resultData = dataProjects()
      .map((item) => item.body)
      .map((body) => body.filter((image) => image.title === target.alt))
      .filter((arrayObj) => arrayObj.length > 0);
    const cleanFilterr = { ...resultData[0][0] };
    const { allImagesProject, video, title } = cleanFilterr;
    const fullArray = video !== '' ? [...allImagesProject, video]
      : [...allImagesProject];
    const lengthAllImages = fullArray.length;
    console.log(fullArray);
    this.setState({
      open: !open,
      currentLengthImage: lengthAllImages,
      arrayMedia: fullArray,
      currrentAlt: title,
    })
  };

  incraseCurrentImage = () => {
    const { currentImage, currentLengthImage } = this.state;
    if (currentImage < currentLengthImage - 1) {
      this.setState((prevState) => ({
        currentImage: prevState.currentImage + 1
      }))
    }
  }

  decraseCurrentImage = () => {
    const { currentImage } = this.state;
    if (currentImage !== 0) {
      this.setState((prevState) => ({
        currentImage: prevState.currentImage - 1
      }))
    }
  }

  render() {
    // ============BreakPoints e ChangeTheme============
    const { open, currentImage, currentLengthImage, arrayMedia, currrentAlt } = this.state;
    const { colorChange, currentTheme, currentScreen } = this.props;
    const { breakpoints: { values } } = theme;
    const currentTypographyColor = currentTheme === 'dark' ? 'white' : 'black'
    // const currentTypographySize = currentScreen.width <= values.md2 ? 'body2' : 'h7';
    const currentTypographyTitleSize = currentScreen.width <= values.md2 ? 'h5' : 'h4';
    const currentIconTitleSize = currentScreen.width <= values.md2 ? 'medium' : 'large';
    //=============Breackpoints MediaQuery==================
    const BoxCards = styled('div')(({ theme }) => ({
      [theme.breakpoints.down('md2')]: {
        width: '95%',
      },
    }));

    const BoxImageText = styled('div')(({ theme }) => ({
      [theme.breakpoints.down('md3')]: {
        flexDirection: 'column'
      },
    }));

    return (
      dataProjects(colorChange, currentIconTitleSize).map((dataVanila) => (
        <Box
          key={uuidv4()}
          sx={{
            width: '100%',
            m: '2rem 1rem 0rem 1rem',
          }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {dataVanila.head.icon}
            <Typography
              variant={currentTypographyTitleSize}
              fontFamily='Hack'
              sx={{
                width: '100%',
                m: '0rem 0rem 0rem 1rem',
                color: colorChange,
              }}>
              {dataVanila.head.title}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {dataVanila.body.map((dataVanilabody) => (
              <BoxCards
                key={uuidv4()}
                sx={{
                  width: '45%',
                  height: 'auto',
                  m: '0.5rem 1rem 0.5rem 0rem',
                  p: '0rem 1rem 1rem 0rem',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: `primary.${currentTheme}`,
                  borderRadius: '0.7rem',
                  boxShadow: '2'
                }}
              >

                <Typography
                  variant='h6'
                  fontFamily='Hack'
                  sx={{
                    width: '100%',
                    m: '0.5rem 0rem 0rem 1rem',
                    color: colorChange,
                  }}>
                  {dataVanilabody.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  {dataVanilabody.technologiesProgress.map((dataTech) => (
                    <IconsProgress
                      key={uuidv4()}
                      name={dataTech.name}
                      progress={dataTech.progress}
                      src={dataTech.src}
                    />
                  ))}
                </Box>

                <BoxImageText
                  sx={{
                    width: '100%',
                    display: 'flex',
                  }}
                >
                  <img
                    onClick={(event) => this.handleToggle(event)}
                    src={dataVanilabody.mainImageProject}
                    alt={dataVanilabody.title}
                    style={{
                      margin: '0.5rem 0rem 0rem 1rem',
                      width: '40%',
                      height: 'auto',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  />
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                  >
                    {currentImage > 0 &&
                      <ArrowBackIosIcon
                        sx={{
                          cursor: 'pointer',
                        }}
                        onClick={this.decraseCurrentImage}
                        fontSize='large'
                      />
                    }

                    {currentImage > 0
                      && currentImage === currentLengthImage - 1 ?
                      <iframe width="1143" height="644.469" src={arrayMedia[currentLengthImage - 1]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                      :
                      <img
                        src={arrayMedia[currentImage]}
                        alt={currrentAlt}
                        style={{
                          width: '60%',
                          height: 'auto',
                          borderRadius: '5px',
                          margin: '0rem 1rem 0rem 1rem',
                        }}
                      />
                    }


                    {currentImage !== currentLengthImage - 1 &&
                      <ArrowForwardIosIcon
                        sx={{
                          cursor: 'pointer',
                        }}
                        onClick={this.incraseCurrentImage}
                        fontSize='large'
                      />
                    }

                    <CloseIcon
                      sx={{
                        m: '0rem 0rem 45rem 0rem',
                        cursor: 'pointer',
                      }}
                      fontSize='large'
                      onClick={this.handleClose}
                    />

                  </Backdrop>
                  <Typography
                    variant='body2'
                    fontFamily='Hack'
                    sx={{
                      width: '100%',
                      m: '0.5rem 0rem 0rem 1rem',
                      color: currentTypographyColor,
                    }}>
                    {dataVanilabody.text}
                  </Typography>
                </BoxImageText>

                <Box
                  sx={{
                    m: '1rem 0rem 0rem 1rem',
                    widht: '100%',
                    display: 'flex',
                  }}
                >
                  <Link
                    href={dataVanilabody.linkGitHub}
                    target="_blank"
                    sx={{
                      widht: '100%',
                      m: '0rem 1rem 0rem 0rem',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: '100%',
                        m: '0rem 3rem 0rem 0rem',
                        bgcolor: colorChange,
                        color: currentTypographyColor,
                        fontFamily: 'Hack',
                        fontWeight: 'bolder',
                        '&:hover': {
                          bgcolor: colorChange,
                        }
                      }}>GitHub</Button>
                  </Link>
                  <Link
                    href={dataVanilabody.linkApp}
                    target="_blank"
                    sx={{
                      widht: '100%',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: '100%',
                        m: '0rem 2rem 0rem 0rem',
                        bgcolor: colorChange,
                        color: currentTypographyColor,
                        fontFamily: 'Hack',
                        fontWeight: 'bolder',
                        '&:hover': {
                          bgcolor: colorChange,
                        }
                      }}>Aplicação
                    </Button>
                  </Link>
                </Box>
              </BoxCards>
            ))}
          </Box>

        </Box>
      ))

    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default CardProjectsVanila

// ======export Redux=======
export default connect(mapStateToProps)(CardProjects);
