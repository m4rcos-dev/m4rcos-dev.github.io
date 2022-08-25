import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

export const dataAppBarTop = (size) => {
  return [
    {
      id: '8043f073-e796-4c29-8333-fe6ce3e38905',
      text: 'Inicio',
      icon: <HomeIcon fontSize={size} />,
      link: '#home',
    },
    {
      id: 'e5c3ee66-c745-4075-ab0c-6bc3ae8edcf6',
      text: 'Sobre',
      icon: <AssignmentIndIcon fontSize={size} />,
      link: '#about',
    },
    {
      id: 'e79b0598-7af9-46de-84d8-8a8d9fdbbf4e',
      text: 'Projetos',
      icon: <SettingsEthernetIcon fontSize={size} />,
      link: '#projects',
    }
  ]
}
