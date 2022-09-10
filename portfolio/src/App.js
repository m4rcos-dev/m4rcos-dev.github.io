import { Box, styled } from '@mui/material';
import AppBarTop from './components/AppBarTop';
import Content from './components/Content';
import ControlPanel from './components/ControlPanel';
import DrawerLeft from './components/DrawerLeft';

//=============Breackpoints MediaQuery==================
const BoxCustom = styled('div')(({ theme }) => ({
  overflow: 'hidden',
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
      <Content />
      <Box>
        <ControlPanel />
      </Box>
    </BoxCustom>
  )
}

export default App;
