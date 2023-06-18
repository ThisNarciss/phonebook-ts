import styled from '@emotion/styled';

export const TextBox = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const AnimationBox = styled.div`
  position: relative;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;
export const HomeTitle = styled.h1`
  max-width: 500px;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.21;
  text-transform: uppercase;
  transition: color 250ms linear;
  color: ${({ theme }) => (theme.palette.mode === 'dark' ? 'white' : 'black')};
`;

export const HomeLabel = styled.p`
  max-width: 500px;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.21;
  text-transform: none;

  margin-bottom: 40px;

  transition: color 250ms linear;
  color: ${({ theme }) => (theme.palette.mode === 'dark' ? 'white' : 'black')};
`;
export const HomeText = styled.p`
  max-width: 600px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;

  color: #9e9d9d;
`;

export const Rectangle = styled.img`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
  }
`;
export const RectangleMob = styled.img`
  display: block;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
