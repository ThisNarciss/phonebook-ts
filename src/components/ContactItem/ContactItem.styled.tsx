import styled from '@emotion/styled';

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  font-size: 12px;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 5px;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? 'transparent' : '#FFFFFF'};
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.15), transparent);
  transform-style: preserve-3d;

  display: grid;
  grid-template-rows: 1fr;
  row-gap: 0.5rem;
  column-gap: 2rem;

  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
  ::before {
    --ry: -1;
    right: 100%;
    --side-rotate: 60deg;
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 70px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transform-origin: calc(50% - (50% * var(--ry))) 50%;
    transform: rotateY(calc(var(--side-rotate) * var(--ry)));
    background-color: inherit;
    background-image: linear-gradient(
      calc(90deg * var(--ry)),
      rgb(0 0 0 / 0.25),
      rgb(0 0 0 / 0.5)
    );
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
      0 2px 2px rgba(0, 0, 0, 0.12);
  }
  ::after {
    --ry: 1;
    left: 100%;
    --side-rotate: 60deg;
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 70px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transform-origin: calc(50% - (50% * var(--ry))) 50%;
    transform: rotateY(calc(var(--side-rotate) * var(--ry)));
    background-color: inherit;
    background-image: linear-gradient(
      calc(90deg * var(--ry)),
      rgb(0 0 0 / 0.25),
      rgb(0 0 0 / 0.5)
    );
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
      0 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
export const ItemLetter = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #bdbdbd;
  padding: 5px;
`;

export const Letter = styled.p`
  width: 100%;
`;

export const ContainerBtn = styled.div`
  display: flex;
`;
