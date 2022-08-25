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
      icon: <AssignmentIndIcon fontSize={size} />,
      slected: currentUrl === '/about'
    },
    {
      linkText: 'Projetos',
      link: '/projects',
      icon: <SettingsEthernetIcon fontSize={size} />,
      slected: currentUrl === '/projects'
    },
  ];
}

export const dataNavSocialMedia = (size) => {
  return [
    {
      id: '1c26406d-d4fe-4857-9490-093d12b398a4',
      text: 'LinkedIn',
      icon: <LinkedInIcon fontSize={size} />,
      link: 'https://www.linkedin.com/in/dev-marcospaulo'
    },
    {
      id: '916925e6-2e3e-48ae-a914-31161dc1a18b',
      text: 'GitHub',
      icon: <GitHubIcon fontSize={size} />,
      link: 'https://github.com/m4rcos-dev'
    },
  ]
}

