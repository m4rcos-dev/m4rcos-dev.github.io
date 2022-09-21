import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { dataAvatarCardAbout } from './dataPageAbout';

export const dataProjects = (iconColor, iconSize) => {
  return [
    // Front END
    {
      head: {
        title: 'Front End',
        icon: <RocketLaunchIcon sx={{ color: iconColor }} fontSize={iconSize} />,
      },
      body: [
        // PROJETO shopping-cart-trybe
        {
          title: 'Shopping cart',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 22,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
            {
              name: 'CSS',
              progress: 38,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
            {
              name: 'API',
              progress: 15,
              src: dataAvatarCardAbout().icosTechnologies[6].src,
            },
            {
              name: 'JavaScript',
              progress: 50,
              src: dataAvatarCardAbout().icosTechnologies[4].src,
            },
          ],
          mainImageProject: 'https://imgcloud.com.br/share/kTNpIDyNjyh2fGXL',
          video: 'https://www.youtube.com/embed/8RgHsmP7Lbo',
          allImagesProject: [
            'https://imgcloud.com.br/share/kTNpIDyNjyh2fGXL',
            'https://imgcloud.com.br/share/sF1wg9iMsmk5jJ2Y',
            'https://imgcloud.com.br/share/gP7sX5ELVbVezRI8',
          ],
          text: `Simula uma loja online, utilizando API do Mercado Livre. Com busca de produtos e um carrinho que armazena os produtos que são adicionados, somando o total, possibilitando excluir ou adicionar produtos. Projeto feito sem nenhum Framework, apenas com html, javascript e css puros.`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-shopping-cart-trybe.git',
          linkApp: 'https://trybe-shopping-cart.netlify.app/',
        },
        // PROJETO Trybe Wallet
        {
          title: 'Trybe Wallet',
          technologiesProgress: [
            {
              name: 'React',
              progress: 63,
              src: dataAvatarCardAbout().icosTechnologies[8].src,
            },
            {
              name: 'API',
              progress: 10,
              src: dataAvatarCardAbout().icosTechnologies[6].src,
            },
            {
              name: 'Material-UI',
              progress: 37,
              src: dataAvatarCardAbout().icosTechnologies[10].src,
            },
          ],
          mainImageProject: 'https://imgcloud.com.br/share/EoZJThkfH2iHFsjK',
          video: 'https://www.youtube.com/embed/dX5W9jHAaSM',
          allImagesProject: [
            'https://imgcloud.com.br/share/EoZJThkfH2iHFsjK',
            'https://imgcloud.com.br/share/EbinnP8yhrWLIcrg',
          ],
          text: `Carteira virtual com cotação de moedas em tempo real utilizando API, podendo adicionar despesas, editar e excluir, com cálculo total convertido pela cotação da moeda escolhida. Desenvolvido pensando no mobile first utilizando React e Material-UI.`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-trybewallet.git',
          linkApp: 'https://trybewallet.web.app/',
        },
        // Projeto Solar System
        {
          title: 'Sistema Solar',
          technologiesProgress: [
            {
              name: 'React',
              progress: 90,
              src: dataAvatarCardAbout().icosTechnologies[8].src,
            },
            {
              name: 'CSS',
              progress: 10,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
          ],
          mainImageProject: 'https://imgcloud.com.br/share/NQgnZztE1ksmhgLF',
          video: 'https://www.youtube.com/embed/bKV2T5HiSho',
          allImagesProject: [
            'https://imgcloud.com.br/share/NQgnZztE1ksmhgLF',
            'https://imgcloud.com.br/share/LaxvOqh3vNdmFRLx',
          ],
          text: `Meu primeiro projeto utilizando React, aprendendo a componentizar e reaproveitar o componente na página ganhado assim agilidade e tempo para desenvolver aplicações WEB. O projeto é simples apenas para colocar em prática todo os conceitos citado acima`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-solar-system-trybe.git',
          linkApp: 'https://m4rcos-dev.github.io/project-solar-system-trybe/',
        },
      ]
    },
    // Vanila
    {
      head: {
        title: 'HTML, CSS, JAVASCRIPT',
        icon: <RocketIcon sx={{ color: iconColor }} fontSize={iconSize} />,
      },
      body: [
        // Projeto Pixel Art
        {
          title: 'Pixel Art',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 26,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
            {
              name: 'JavaScript',
              progress: 48,
              src: dataAvatarCardAbout().icosTechnologies[4].src,
            },
            {
              name: 'CSS',
              progress: 26,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
          ],
          mainImageProject: 'https://imgcloud.com.br/share/RTzhS0Jm2sXsDQDj',
          video: 'https://www.youtube.com/embed/tHYsUl38f54',
          allImagesProject: [
            'https://imgcloud.com.br/share/RTzhS0Jm2sXsDQDj',
            'https://imgcloud.com.br/share/S4zJpYBojnHxbeFO',
            'https://imgcloud.com.br/share/FEmbjThK7Joltmx8',
            'https://imgcloud.com.br/share/1Mo9S0byeF3IQCJk',
          ],
          text: `O projeto renderiza uma tabela de pixels onde é possível redefinir o tamanho e quantidade de pixels, escolher uma cor para pintar e criar sua própria arte pixelada. Projeto feito sem nenhum framework, utiliza htlm, javascript, css e manipulação do DOM puros.`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-pixel-art.git',
          linkApp: 'https://trybe-pixel-art.netlify.app/',
        },
      ]
    },
  ]
}
