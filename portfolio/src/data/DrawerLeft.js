import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const dataNavDrawerLeft = (currentUrl, size) => {
  return [
    {
      linkText: 'Inicio',
      link: '/',
      icon: <HomeIcon fontSize={size} />,
      slected: currentUrl === '/'
    },
    {
      linkText: 'Sobre',
      link: '/about',
      icon: <AssignmentIndIcon fontSize={size}  />,
      slected: currentUrl === '/about'
    },
    {
      linkText: 'Projetos',
      link: '/projects',
      icon: <SettingsEthernetIcon fontSize={size}  />,
      slected: currentUrl === '/projects'
    },
  ];
}

export const dataNavSocialMedia = (size) => {
  return [
    {icon: <LinkedInIcon fontSize={size} />},
    {icon: <GitHubIcon fontSize={size} />},
  ]
}
