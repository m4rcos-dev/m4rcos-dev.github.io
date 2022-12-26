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
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import { v4 as uuidv4 } from 'uuid';

export const dataAvatarCardAbout = (colorIcon, sizeIcon) => {
  return {
    avatarImage: AvatarImg,
    title1: 'Bio',
    icon1: <BadgeIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
    text1: `Fascinado por desafio, encontrei na (TI) a área ideal, estudando e trabalhando desde os 15 anos de idade, já fui professor, técnico em informática, empreendedor, técnico em eletrônica e reparo em celulares, streamer, criador de conteúdo digital, e atualmente desenvolvedor Front-End cursando Back-end e almejando o desenvolvimento Full Stack.
    Mineiro, nascido em 93, casado, pai de dois filhos que me motivam todos os dias a dar o meu máximo e claro, um sonhador correndo atrás de meus objetivos....
    Precisa de um DEV? Vamos trabalhar juntos!`,
    title2: 'Tecnologias',
    icon2: <ComputerIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
    icosTechnologies: [
      {
        name: 'Unix & Bash',
        alt: 'Bash logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
      },
      {
        name: 'Git & GitHub',
        alt: 'GitHub logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg',
      },
      {
        name: 'Html 5',
        alt: 'html logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      },
      {
        name: 'Css 3',
        alt: 'css logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      },
      {
        name: 'JavaScipt',
        alt: 'javaScript logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg',
      },
      {
        name: 'API',
        alt: 'API logo',
        src: LogoApi,
      },
      {
        name: 'Jest',
        alt: 'JEST logo',
        src: LogoJest,
      },
      {
        name: 'React',
        alt: 'React logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        name: 'React testing library',
        alt: 'React testing library logo',
        src: 'https://testing-library.com/img/octopus-128x128.png',
      },
      {
        name: 'Redux',
        alt: 'Redux logo',
        src: LogoRedux,
      },
      {
        name: 'Material-UI',
        alt: 'Material-UI logo',
        src: LogoMaterialUI,
      },
    ]
  }
}

export const dataStackCardAbout = (colorIcon, sizeIcon) => {
  return {
    head: [
      {
        id: uuidv4(),
        icon: <ComputerIcon sx={{ color: colorIcon }} fontSize={sizeIcon} />,
        title: 'Stack',
      }
    ],
    languagesAndTools: [
      {
        id: uuidv4(),
        title: 'Linguagens & Ferramentas',
        icons: [
          {
            name: 'VS Code',
            alt: 'VsCode logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          },
          {
            name: 'Java Script',
            alt: 'JavaScript logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          },
          {
            name: 'Type Script',
            alt: 'TypeScript logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          },
          {
            name: 'Linux',
            alt: 'Linux logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          },
          {
            name: 'Unix & Bash',
            alt: 'Bash logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
          },
          {
            name: 'Git',
            alt: 'Git logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          },
          {
            name: 'GitHub',
            alt: 'GitHub logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          },
          {
            name: 'Docker',
            alt: 'Docker logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          },
          {
            name: 'Trello',
            alt: 'Trello logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
          },
          {
            name: 'Scrum',
            alt: 'Scrum logo',
            src: 'https://user-images.githubusercontent.com/104791582/209566973-f3d0c5ca-e922-497e-abba-b21ec7a06cab.svg',
          },
        ]
      }
    ],
    frontEnd: [
      {
        id: uuidv4(),
        title: 'Front-End',
        icons: [
          {
            name: 'Html 5',
            alt: 'Html logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          },
          {
            name: 'Css 3',
            alt: 'Css logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          },
          {
            name: 'React',
            alt: 'React logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          },
          {
            name: 'Redux',
            alt: 'Redux logo',
            src: 'https://user-images.githubusercontent.com/104791582/197048613-1a8a1db3-5e57-407e-ace3-1f9ee2001f9a.svg',
          },
          {
            name: 'Jest',
            alt: 'Jest logo',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
          },
          {
            name: 'React Testing Library',
            alt: 'RTL logo',
            src: 'https://user-images.githubusercontent.com/104791582/197048284-18140464-e1f6-47a0-a5fc-c7f2ec502e47.png',
          },
          {
            name: 'Material-UI',
            alt: 'Material-UI logo',
            src: 'https://user-images.githubusercontent.com/104791582/197049212-1f44d95a-d9d0-4d66-a181-6510ad36bc7a.png',
          },
          {
            name: 'Bootstrap',
            alt: 'Bootstrap logo',
            src: 'https://user-images.githubusercontent.com/104791582/198681666-d9f1568f-e51a-439c-bdb6-516c5d5d1bda.svg',
          },
          {
            name: 'SASS',
            alt: 'SASS logo',
            src: 'https://user-images.githubusercontent.com/104791582/209569202-f5b10dc4-54e1-464f-8ce2-50fe6cfd898f.png',
          },
        ]
      }
    ],
    backEnd: [
      {
        id: uuidv4(),
        title: 'Back-End',
        icons: [
          {
            name: 'Unix & Bash',
            alt: 'Bash logo',
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
          },
          {
            name: 'Git & GitHub',
            alt: 'GitHub logo',
            src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg',
          },
          {
            name: 'Html 5',
            alt: 'html logo',
            src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
          },
        ]
      }
    ],
  }
}

export const dataAcademicTimeLine = (colorIcon, sizeIcon) => {
  return {
    head: [
      {
        id: uuidv4(),
        icon: <SchoolIcon sx={{ color: colorIcon, }} fontSize={sizeIcon} />,
        title: 'Formação Acadêmica',
      }
    ],
    body: [
      {
        id: uuidv4(),
        title: 'Maio 2022 - atual',
        subTitle: 'Desenvolvimento Web Full Stack',
        institution: 'Trybe - Cursando',
        text:
          `A Trybe é uma escola para pessoas que querem construir uma carreira de sucesso em tecnologia e que se compromete integralmente com seus estudantes, pois as pessoas só pagam quando conseguirem um bom trabalho.
            O programa conta com mais 1.500 horas de aulas presencias e online e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.`,
      },
      {
        id: uuidv4(),
        title: 'Abril 2021 - Dezembro 2021',
        subTitle: 'Reparo de Placas Notebooks, Desktop e Video, Solda BGA',
        institution: 'André Cisp / Global Eletonics',
        text:
          `Eletrônica aplicada a notebook, desktop e placa de video, leitura e interpretação de esquemas elétricos, analise e conserto de placa mãe e solda BGA`,
      },
      {
        id: uuidv4(),
        title: 'Fevereiro 2018 - Julho 2019',
        subTitle: 'Manutenção e Conserto de Celulares',
        institution: 'André Cisp',
        text:
          `Conserto de Celulares do básico ao avançado, Troca de Vidro na cola UV e OCA, Hard Reset e Instalação de Software e Rom, Reparo Avançado em Placas`,
      },
      {
        id: uuidv4(),
        title: 'Março 2013 - Novembro 2017',
        subTitle: 'Bacharelado em Tecnologia da Informação / Sistema da informação',
        institution: 'Centro Universitário do Cerrado - UNICERP',
        text:
          `Curso Trancado / Interrompido`,
      },
      {
        id: uuidv4(),
        title: 'Maio 2011 - Junho 2012',
        subTitle: 'Instalação e Manutenção de Computadores / Técnico em informática',
        institution: 'Centro de Educação Profissional Bit Company',
        text:
          `Informática Básica e Avançada, Digitação, Excel, Word, Analista de Hadware e Redes, Administrador de Banco de Dados SQL, Design Gráfico, Administrador de Redes Linux, Profissional Cad/Autocad, Programação, Tecnologia e Robótica.`
      },
    ]
  }
}

export const dataExperienceTimeLine = (colorIcon, sizeIcon) => {
  return {
    head: [
      {
        icon: <BusinessIcon sx={{ color: colorIcon, }} fontSize={sizeIcon} />,
        title: 'Experiência Profissionais',
      }
    ],
    body: [
      {
        title: 'Maio 2021 - Abril 2022',
        subTitle: 'Técnico de TI',
        institution: 'F5 Tecnologia',
        text:
          `Responsável por atender toda demanda empresarial ou particular para conserto técnico em hardware, software, ou prevenção, de forma física e remota. Manutenção em computadores e notebooks, conserto eletrônicos em placa mães de computadores e notebooks, atendimento ao cliente.`,
      },
      {
        title: 'Janeiro 2020 - Fevereiro 2021',
        subTitle: 'Streamer',
        institution: 'NimoTv - Plataforma de streamer de Games',
        text:
          `Integrante do primeiro time de e-sports de GTA-RP "HardTeam", da plataforma, criador de conteúdo com mais de dez mil inscritos no canal e uma média de duas mil visualizações mensais`,
      },
      {
        title: 'Agosto 2012 - Janeiro 2020',
        subTitle: 'Proprietário',
        institution: 'SkyNet informática e Tecnologia',
        text:
          `Criada em 2012, especializada em assistência técnica em computadores, notebooks e celulares, manutenção de impressoras e recarga de cartuchos e toner. Venda de computadores e periféricos.`,
      },
      {
        title: 'Fevereiro 2010 - Abril 2012',
        subTitle: 'Professor',
        institution: 'Centro de Educação Profissional Bit Company',
        text:
          `Professor Técnico dos Curos, Básico de informática, Pacote Office, Montagem e manutenção de computadores, Redes, AutoCad, Designer gráfico pacote Adobe, WebDesign`,
      },
    ]
  }
}
