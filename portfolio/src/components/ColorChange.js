import * as React from 'react';
import styled from "@emotion/styled";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  // position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function ColorChange() {
  return(
    <Box>
       <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          // hidden
          icon={<SpeedDialIcon />}
          direction='left'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
    </Box>
  );
}

export default ColorChange;
