import AppBarTop from './components/AppBarTop';
import Content from './components/Content';
import DrawerLeft from './components/DrawerLeft';
import { BoxCustom } from './style/AppStyle';

function App() {
  return (
    <BoxCustom sx={{ display: 'flex' }}>
      <AppBarTop />
      <DrawerLeft />
      <Content />
    </BoxCustom>
  )
}

export default App;
