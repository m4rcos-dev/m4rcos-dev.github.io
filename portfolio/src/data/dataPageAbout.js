import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ComputerIcon from '@mui/icons-material/Computer';
// import LogoHtml from '../assets/logoHtml.svg'
// import LogoCss from '../assets/logoCss.svg'
// import LogoJavaScript from '../assets/logoJavaScript.svg'
import LogoApi from '../assets/logoApi.svg'
import LogoJest from '../assets/logoJest.svg'
import LogoRedux from '../assets/logoRedux.svg'
import LogoMaterialUI from '../assets/logoMaterialUI.svg'
// import LogoBash from '../assets/logoBash.svg'
import AvatarImg from '../assets/avatarImg.png'
import SchoolIcon from '@mui/icons-material/School';

export const dataAvatarCardAbout = (colorIcon, sizeIcon, innerHtml) => {
  return {
    avatarImage: AvatarImg,
    title1: 'Bio',
    icon1: <LibraryBooksIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
    text1: `Facinado por desafio, encontrei na TI a área ideal, estudando e trabalhando na area desde os 15 anos de idade, já foi professor, técnico em informática, empreendedor, técnico em eletronica e reparo em celularers, streamer, criador de conteúdo digital, e atualmente desenvolvedor Front-End cursando Back-end e almejando o desenvolvimento Full Stack.
    Casado, pai de dois filhos que me motivam todos os dias a dar o meu máximo e claro um sonhador correndo atras de seus objetivos....
    Precisa de um DEV? Vamos trabalhar juntos....`,
    title2: 'Tecnologias',
    icon2: <ComputerIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
    icosTechnologies: [
      {
        alt: 'Bash logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
      },
      {
        alt: 'GitHub logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg',
      },
      {
        alt: 'html logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      },
      {
        alt: 'css logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      },
      {
        alt: 'javaScript logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg',
      },
      {
        alt: 'ecmaScript logo',
        src: 'http://www.bobbyberberyan.com/wp-content/uploads/2016/12/ES6LOGO.svg',
      },
      {
        alt: 'API logo',
        src: LogoApi,
      },
      {
        alt: 'JEST logo',
        src: LogoJest,
      },
      {
        alt: 'React logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        alt: 'React testing library logo',
        src: 'https://testing-library.com/img/octopus-128x128.png',
      },
      {
        alt: 'Redux logo',
        src: LogoRedux,
      },
      {
        alt: 'Material-UI logo',
        src: LogoMaterialUI,
      },
    ]
  }
}

export const dataAcademicTimeLine = (colorIcon, sizeIcon) => {
  return {
    head: [
      {
        icon: <SchoolIcon sx={{ color: colorIcon, }} fontSize={sizeIcon} />,
        title: 'Formação',
      }
    ],
    body: [
      {
        title: 'Maio 2022 - atual',
        subTitle: 'Desenvolvimento Web Full Stack',
        institution: 'Trybe - Cursando',
        text:
          `A Trybe é uma escola para pessoas que querem construir uma carreira de sucesso em tecnologia e que se compromete integralmente com seus estudantes, pois as pessoas só pagam quando conseguirem um bom trabalho.
            O programa conta com mais 1.500 horas de aulas presencias e online e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.`,
      },
      {
        title: 'Abril 2021 - Dezembro 2021',
        subTitle: 'Reparo de Placas Notebooks, Desktop e Video, Solda BGA',
        institution: 'André Cisp / Global Eletonics',
        text:
          `Eletrônica aplicada a notebook, desktop e placa de video, leitura e interpretação de esquemas elétricos, analise e conserto de placa mãe e solda BGA`,
      },
      {
        title: 'Fevereiro 2020 - Agosto 2020',
        subTitle: 'Manutenção e Conserto de Celulares',
        institution: 'André Cisp',
        text:
          `Conserto de Celulares básico ao avançado, Troca de Vidro na cola UV e OCA, Hard Reset e Instalação de Software e Rom, Reparo Avançado em Placas`,
      },
      {
        title: 'Março 2013 - Novembro 2017',
        subTitle: 'Bacharelado em Tecnologia da Informação / Sistema da informação',
        institution: 'Centro Universitário do Cerrado - UNICERP',
        text:
          `Curso Trancado / Interrompido`,
      },
      {
        title: 'Maio 2011 - Junho 2012',
        subTitle: 'Instalação e Manutenção de Computadores / Técnico em informática',
        institution: 'Centro de Educação Profissional Bit Company',
        text:
          `Informática Básica e Avançada, Digitação, Excel, Word, Analista de Hadware e Redes, Administrador de Banco de Dados SQL, Design Gráfico, Administrador de Redes Linux, Profissional Cad/Autocad, Programação, Tecnologia e Robótica.`
      },
    ]
  }
}
