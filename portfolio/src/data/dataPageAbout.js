import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ComputerIcon from '@mui/icons-material/Computer';
import LogoHtml from '../assets/logoHtml.svg'
import LogoCss from '../assets/logoCss.svg'
import LogoJavaScript from '../assets/logoJavaScript.svg'
import AvatarImg from '../assets/avatarImg.png'

export const dataAvatarCardAbout = (colorIcon, sizeIcon) => {
  return {
    avatarImage: AvatarImg,
    title1: 'Bio',
    icon1: <LibraryBooksIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
    text1: `Facinado por desafio, encontrei na TI a área ideal, estudando e trabalhando na area desde os 15 anos de idade, já foi professor, técnico em informática, empreendedor, técnico em eletronica e reparo em celularers, streamer, criador de conteúdo digital, e atualmente desenvolvedor Front-End cursando Back-end e almejando o desenvolvimento Full Stack.
    ${<br />}
    Casado, pai de dois filhos que me motivam todos os dias a dar o meu máximo e claro um sonhador correndo atras de seus objetivos....
    ${<br />}
    Precisa de um DEV? Vamos trabalhar juntos....`,
    title2: 'Tecnologias',
    icon2: <ComputerIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
    icosTechnologies: [
        {
          alt: 'html logo',
          src: LogoHtml,
        },
        {
          alt: 'css logo',
          src: LogoCss,
        },
        {
          alt: 'javaScript logo',
          src: LogoJavaScript,
        },
    ]
  }
}
