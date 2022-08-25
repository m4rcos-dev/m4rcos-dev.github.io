import CircleIcon from '@mui/icons-material/Circle';

export const dataColorChange = (alternateColor) => {
  return [
    { icon: <CircleIcon />, name: 'Color1', color: alternateColor },
    { icon: <CircleIcon />, name: 'Color2', color: alternateColor },
    { icon: <CircleIcon />, name: 'Color3', color: alternateColor },
    { icon: <CircleIcon />, name: 'Color4', color: alternateColor },
  ]
}
