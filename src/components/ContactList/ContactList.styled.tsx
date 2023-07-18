import styled from '@emotion/styled';

export const List = styled.ul`
  width: min(100%, 60rem);
  overflow: auto;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 4rem);
  list-style: none;
  perspective: 1000px;
  display: grid;
  row-gap: 0.5rem;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #18aaaa;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
