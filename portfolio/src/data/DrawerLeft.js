import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

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
