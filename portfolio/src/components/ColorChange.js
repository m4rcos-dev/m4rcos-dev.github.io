import * as React from 'react';
import styled from "@emotion/styled";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { dataColorChange } from '../data/dataControlPanel';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  // color: theme.palette.primary.dark,
  // '&.MuiSpeedDial-fab': {
  //   bgcolor: theme.palette.primary.light,
  //   // bottom: theme.spacing(2),
  //   // right: theme.spacing(2),
  // },
  // // '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
  // //   bgcolor: theme.palette.secondary.dark,
  // //   // top: theme.spacing(2),
  // //   // left: theme.spacing(2),
  // // },
}));

function ColorChange() {
  return(
    <Box sx={{ mt: '1rem', mr: '1rem'}}>
       <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<ColorLensIcon />}
          direction='left'
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
