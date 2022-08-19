import { Box } from '@mui/material';
import Content from './components/Content';
import DrawerLeft from './components/DrawerLeft';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <DrawerLeft />
      <Content />
    </Box>
  );
}

export default App;
