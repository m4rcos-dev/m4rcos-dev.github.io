import ImageOrange from "../assets/orange.svg"
import ImageRed from "../assets/red.svg"
import ImageGreen from "../assets/green.svg"
import ImageBlue from "../assets/blue.svg"
import ImageInsta from "../assets/insta.svg"
import ImageYoutube from "../assets/youtube.svg"
import ImageTwitter from "../assets/twitter.svg"
import { v4 as uuidv4 } from 'uuid';

export const dataPageHome = () => {
  return {
    titleInfo: 'Olá! Eu sou o',
    subTitleInfo: 'Marcos Paulo Pereira',
    textInfo: 'Desenvolvedor Front-end, com muita disposição e vontade de aprender, acrescentar e evoluir. Cursando Back-end e almejando o desenvolvimento Full Stack.',
    buttonInfo: 'Baixar Curriculo',
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
        alt: 'Insta',
        src: ImageInsta,
        margin1: '13rem 0rem 0rem 0rem',
        margin2: '13rem 0rem 0rem 0rem',
        link: '',
      },
      {
        id: uuidv4(),
        alt: 'YouTube',
        src: ImageYoutube,
        margin1: '8rem 0rem 0rem 28rem',
        margin2: '8rem 0rem 0rem 20rem',
        link: '',
      },
      {
        id: uuidv4(),
        alt: 'Twitter',
        src: ImageTwitter,
        margin1: '47rem 0rem 0rem 6rem',
        margin2: '5rem 0rem 0rem 6rem',
        link: '',
      },
    ],
  }
}
