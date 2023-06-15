import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  ':hover': {
    textDecoration: 'underline',
  },
  ':focus': {
    textDecoration: 'underline',
  },
}));
