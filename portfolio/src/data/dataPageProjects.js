import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ImageProjeto1 from '../assets/Projeto1.png'
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
        // PROJETO 1
        {
          title: 'Projeto 1',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 75,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
            {
              name: 'CSS',
              progress: 45,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
            {
              name: 'JavaScript',
              progress: 85,
              src: dataAvatarCardAbout().icosTechnologies[4].src,
            },
          ],
          mainImageProject: ImageProjeto1,
          allImagesProject: [ImageProjeto1, 'https://youtu.be/lJIrF4YjHfQ', 'teste2'],
          text: `Projeto 1 - TybeWallet TybeWallet TybeWallet kkkkkTybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet`,
          linkGitHub: 'https://www.google.com.br',
          linkApp: 'https://www.google.com.br',
        },
        // PROJETO 2
        {
          title: 'Projeto 2',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 55,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
            {
              name: 'CSS',
              progress: 65,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
            {
              name: 'JavaScript',
              progress: 75,
              src: dataAvatarCardAbout().icosTechnologies[4].src,
            },
          ],
          mainImageProject: ImageProjeto1,
          allImagesProject: [ImageProjeto1],
          text: `Projeto 2 - TybeWallet TybeWallet TybeWallet kkkkkTybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet`,
          linkGitHub: 'https://www.google.com.br',
          linkApp: 'https://www.google.com.br',
        },
        // PROJETO 3
        {
          title: 'Projeto 3',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 55,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
            {
              name: 'CSS',
              progress: 65,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
            {
              name: 'JavaScript',
              progress: 75,
              src: dataAvatarCardAbout().icosTechnologies[4].src,
            },
          ],
          mainImageProject: ImageProjeto1,
          allImagesProject: [ImageProjeto1],
          text: `Projeto 2 - TybeWallet TybeWallet TybeWallet kkkkkTybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet`,
          linkGitHub: 'https://www.google.com.br',
          linkApp: 'https://www.google.com.br',
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
        {
          title: 'Projeto 1.1',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 75,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
          ],
          mainImageProject: ImageProjeto1,
          allImagesProject: [ImageProjeto1],
          text: `Projeto 1 - TybeWallet TybeWallet TybeWallet kkkkkTybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet TybeWallet`,
          linkGitHub: 'https://www.google.com.br',
          linkApp: 'https://www.google.com.br',
        },
      ]
    },
  ]
}
