import styled from '@emotion/styled';
import bgimg from '../../images/bg-01.jpg';
import { Theme } from '@mui/material';

export const TitleBox = styled.div`
  display: flex;
`;
export const SectionBox = styled.section<{ theme: Theme }>`
  margin: 0 auto;
  display: flex;

  align-items: center;
  height: 100vh;
  background-image: url(${bgimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: background-color 250ms linear;
    background-color: ${({ theme }) => {
      switch (theme.palette.mode) {
        case 'light':
          return 'rgba(255, 255, 255, 0.9)';

        case 'dark':
          return 'rgba(75, 73, 73, 0.9)';

        default:
          return 'rgba(255, 255, 255, 0.9)';
      }
    }};
  }
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
