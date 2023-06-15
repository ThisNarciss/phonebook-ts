import styled from '@emotion/styled';

export const FooterBox = styled.footer`
  padding: 20px 0;
  transition: background-color 250ms linear;

  box-shadow: 1px -15px 9px 0px rgba(0, 0, 0, 0.39);
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#333232' : '#aaaaaa'};
`;
