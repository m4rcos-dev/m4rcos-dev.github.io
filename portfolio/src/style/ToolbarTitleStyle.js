import { styled, Typography } from "@mui/material";

// ==============Animação Escrita==================
export const TypographyCustom = styled(Typography)`
  border-right: 2px solid;
  font-sizy: ${({theme}) => theme.typography.h4}
  animation: blinkCursor 500ms steps(30) infinite normal, typing 1s steps(15) 1s normal both;
  overflow: hidden;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 6em;
    }
  }

  @keyframes blinkCursor {
    from {
      border-right-color: ${({theme}) => theme.palette.common.black };
    }
    to {
      border-right-color: transparent;
    }
  }
`

