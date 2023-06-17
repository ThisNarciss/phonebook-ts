import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  transition: 'color 250ms linear',
  maxWidth: '600px',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

export const TelLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  padding: '5px',
  borderRadius: '5px',
  transition: 'background-color 250ms linear, color 250ms linear',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  ':hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#512da8' : '#e1bee7',
  },
  ':focus': {
    backgroundColor: theme.palette.mode === 'dark' ? '#512da8' : '#e1bee7',
  },
}));
