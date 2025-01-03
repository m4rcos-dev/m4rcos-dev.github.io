import ImageOrange from "../assets/orange.svg";
import ImageRed from "../assets/red.svg";
import ImageGreen from "../assets/green.svg";
import ImageBlue from "../assets/blue.svg";
import ImageInsta from "../assets/insta.svg";
import ImageYoutube from "../assets/youtube.svg";
import ImageX from "../assets/x.svg";
import Curriculo from "../assets/CurriculoMarcosPaulo.pdf";
import { v4 as uuidv4 } from "uuid";

export const dataPageHome = () => {
  return {
    titleInfo: "Olá! Eu sou o",
    subTitleInfo: "Marcos Paulo Pereira",
    textInfo:
      "Sou apaixonado por tecnologia e inovação, sempre em busca de novas oportunidades para aprender, contribuir e evoluir. Com uma abordagem poliglota em linguagens de programação e tecnologias, acredito que não existe uma solução única para os desafios do desenvolvimento. Em vez disso, há sempre espaço para criar, aprimorar e otimizar soluções, garantindo um impacto significativo nos projetos em que atuo.",
    buttonInfo: "Baixar Curriculo",
    buttonLink: Curriculo,
    donwload: "CurriculoMarcosPaulo.pdf",
    avatarInfo: [
      {
        id: uuidv4(),
        currentColor: "alternateColor.orange",
        maxWidth: "612px",
        margin: "10rem 0rem 0rem 0rem",
        src: ImageOrange,
      },
      {
        id: uuidv4(),
        currentColor: "alternateColor.red",
        maxWidth: "612px",
        margin: "10rem 0rem 0rem 0rem",
        src: ImageRed,
      },
      {
        id: uuidv4(),
        currentColor: "alternateColor.green",
        maxWidth: "612px",
        margin: "10rem 0rem 0rem 0rem",
        src: ImageGreen,
      },
      {
        id: uuidv4(),
        currentColor: "alternateColor.blue",
        maxWidth: "612px",
        margin: "10rem 0rem 0rem 0rem",
        src: ImageBlue,
      },
    ],
    socialImage: [
      {
        id: uuidv4(),
        alt: "Instagram",
        src: ImageInsta,
        margin1: "13rem 0rem 0rem 0rem",
        margin2: "13rem 0rem 0rem 0rem",
        link: "https://www.instagram.com/m4rcos.dev/",
      },
      {
        id: uuidv4(),
        alt: "YouTube",
        src: ImageYoutube,
        margin1: "8rem 0rem 0rem 28rem",
        margin2: "8rem 0rem 0rem 20rem",
        link: "https://www.youtube.com/channel/UCAbpHW3KJu0S_bFF5fMqvNw",
      },
      {
        id: uuidv4(),
        alt: "X",
        src: ImageX,
        margin1: "47rem 0rem 0rem 6rem",
        margin2: "5rem 0rem 0rem 6rem",
        link: "https://twitter.com/m4rcos_dev",
      },
    ],
  };
};
