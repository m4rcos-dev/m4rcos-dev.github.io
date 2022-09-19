import { styled } from '@mui/material';
import React, { Component } from 'react'
import theme from "../style/Theme";
import "../style/HomeAnimation.css"
import { connect } from 'react-redux';
import { dataPageHome } from '../data/dataPageHome';

class ImageInfo extends Component {
  render() {
    // ============BreakPoints e ChangeTheme============
    const { currentScreen, colorChange } = this.props;
    const { breakpoints: { values } } = theme;
    //=============Breackpoints MediaQuery==================
    const BoxCustomImage = styled('div')(({ theme }) => ({
      [theme.breakpoints.down('md3')]: {
        width: '100%',
        height: 'auto',
      },
    }));

    const ImgCustomAvatar = styled('img')(() => ({
      [theme.breakpoints.down('md2')]: {
        width: '412px',
      },
      [theme.breakpoints.down('md3')]: {

      },
    }));

    return (
      <BoxCustomImage
        sx={{
          width: '50%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {dataPageHome().socialImage.map((imageSocial) => (
          currentScreen.width > values.md2
          && <img className="vibrate-2 jello-horizontal" style={{
            maxWidth: '119px',
            position: 'absolute',
            margin: imageSocial.margin1,
          }} src={imageSocial.src} alt={imageSocial.alt} key={imageSocial.id} />
        ))}

        {dataPageHome().socialImage.map((imageSocial) => (
          currentScreen.width <= values.md2
          && <img className="vibrate-2 jello-horizontal" style={{
            maxWidth: '119px',
            position: 'absolute',
            margin: imageSocial.margin2,
          }} src={imageSocial.src} alt={imageSocial.alt} key={imageSocial.id}/>
        ))}

        {dataPageHome().avatarInfo.map((image) => (
          colorChange === image.currentColor
          && <ImgCustomAvatar style={{
            maxWidth: image.maxWidth,
            margin: image.margin,
          }} src={image.src} alt="img Portifólio2" key={image.id}/>
        ))}
      </BoxCustomImage>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.themeChange,
  ...state.colorChange,
  ...state.currentScreen,
  ...state.activeTransition,
});

// export default ImageInfo

// ======export Redux=======
export default connect(mapStateToProps)(ImageInfo);
