import * as React from 'react';
import styled from "@emotion/styled";
import { Box, getSpeedDialUtilityClass, SpeedDial, SpeedDialAction } from "@mui/material";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { dataColorChange } from '../data/dataControlPanel';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
//  '&.MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab': {
//   bgcolor: '#000000',
//  }
}));
console.log(getSpeedDialUtilityClass);
function ColorChange() {
  return(
    <Box sx={{ mt: '1rem', mr: '1.5rem'}}>
       <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<ColorLensIcon />}
          direction='left'
          sx={{
            '& .MuiSpeedDial-fab': {
              bgcolor: 'alternateColor1.main',
            },
            '& .MuiSpeedDial-fab:hover': {
              bgcolor: 'alternateColor1.main',
            },
          }}
        >
          {dataColorChange('alternateColor1.main').map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{ color: action.color, bgcolor: action.color }}
            />
          ))}
        </StyledSpeedDial>
    </Box>
  );
}

export default ColorChange;
