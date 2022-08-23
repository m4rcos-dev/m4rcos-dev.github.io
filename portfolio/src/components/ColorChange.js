import * as React from 'react';
import styled from "@emotion/styled";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CircleIcon from '@mui/icons-material/Circle';

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

const actions = [
  { icon: <CircleIcon />, name: 'Color1', color: 'alternateColor1.main' },
  { icon: <CircleIcon />, name: 'Color2', color: 'alternateColor1.main'},
  { icon: <CircleIcon />, name: 'Color3', color: 'alternateColor1.main' },
  { icon: <CircleIcon />, name: 'Color4', color: 'alternateColor1.main' },
];

function ColorChange() {
  return(
    <Box sx={{ mt: '1rem', mr: '1rem'}}>
       <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<ColorLensIcon />}
          direction='left'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{ color: `${action.color}`, bgcolor: `${action.color}`}}
            />
          ))}
        </StyledSpeedDial>
    </Box>
  );
}

export default ColorChange;
