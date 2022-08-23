import { styled } from '@mui/material';
import AppBarTop from './components/AppBarTop';
import ContentAppBarTop from './components/ContentAppBarTop';
import ContentDrawer from './components/ContentDrawer';
import ControlPanel from './components/ControlPanel';
import DrawerLeft from './components/DrawerLeft';

//=============Breackpoints MediaQuery==================
const BoxCustom = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md2')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('md3')]: {
    display: 'flex',
    flexDirection: 'column'
  },
}));

function App() {
  return (
    <BoxCustom sx={{ display: 'flex' }}>
      <AppBarTop />
      <DrawerLeft />
      <ContentDrawer />
      <ContentAppBarTop />
      <ControlPanel />
    </BoxCustom>
  )
}

export default App;
