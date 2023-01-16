import ImageOrange from "../assets/orange.svg"
import ImageRed from "../assets/red.svg"
import ImageGreen from "../assets/green.svg"
import ImageBlue from "../assets/blue.svg"
import ImageInsta from "../assets/insta.svg"
import ImageYoutube from "../assets/youtube.svg"
import ImageTwitter from "../assets/twitter.svg"
import Curriculo from "../assets/CurriculoMarcosPaulo.pdf"
import { v4 as uuidv4 } from 'uuid';

export const dataPageHome = () => {
  return {
    titleInfo: 'Olá! Eu sou o',
    subTitleInfo: 'Marcos Paulo Pereira',
    textInfo: 'Desenvolvedor Web Full-stack, com muita disposição e vontade de aprender, acrescentar e evoluir. Me considero um poliglota em ascensão na linguagem de programação e suas tecnologias pois nessa área não existe bala de prata mas sim uma forma de resolver o problema que pode ser evoluído e melhorado.',
    buttonInfo: 'Baixar Curriculo',
    buttonLink: Curriculo,
    donwload: 'CurriculoMarcosPaulo.pdf',
    avatarInfo: [
      {
        id: uuidv4(),
        currentColor: 'alternateColor.orange',
        maxWidth: '612px',
        margin: '10rem 0rem 0rem 0rem',
        src: ImageOrange,
      },
      {
        id: uuidv4(),
        currentColor: 'alternateColor.red',
        maxWidth: '612px',
        margin: '10rem 0rem 0rem 0rem',
        src: ImageRed,
      },
      {
        id: uuidv4(),
        currentColor: 'alternateColor.green',
        maxWidth: '612px',
        margin: '10rem 0rem 0rem 0rem',
        src: ImageGreen,
      },
      {
        id: uuidv4(),
        currentColor: 'alternateColor.blue',
        maxWidth: '612px',
        margin: '10rem 0rem 0rem 0rem',
        src: ImageBlue,
      },
    ],
    socialImage: [
      {
        id: uuidv4(),
        alt: 'Instagram',
        src: ImageInsta,
        margin1: '13rem 0rem 0rem 0rem',
        margin2: '13rem 0rem 0rem 0rem',
        link: 'https://www.instagram.com/m4rcos.dev/',
      },
      {
        id: uuidv4(),
        alt: 'YouTube',
        src: ImageYoutube,
        margin1: '8rem 0rem 0rem 28rem',
        margin2: '8rem 0rem 0rem 20rem',
        link: 'https://www.youtube.com/channel/UCAbpHW3KJu0S_bFF5fMqvNw',
      },
      {
        id: uuidv4(),
        alt: 'Twitter',
        src: ImageTwitter,
        margin1: '47rem 0rem 0rem 6rem',
        margin2: '5rem 0rem 0rem 6rem',
        link: 'https://twitter.com/m4rcos_dev',
      },
    ],
  }
}
