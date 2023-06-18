import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 5px;

  @media screen and (min-width: 600px) {
    gap: 10px;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Item = styled.li`
  text-align: center;
`;
export const Link = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  line-height: 1.15;
  position: relative;

  padding: 5px 10px;

  transition: all 250ms linear;
  :hover,
  :focus {
    position: relative;
    color: #fff68f;
  }
  &.active {
    position: relative;
    color: #fff68f;
  }

  font-family: inherit;
  @media screen and (min-width: 900px) {
    font-size: 18px;
    padding: 22px 10px;
    ::after {
      content: '';
      bottom: 0;
      left: 0;
      height: 5px;
      width: 0;
      position: absolute;
      background-color: #fff68f;
      transition: all 250ms linear;
    }
    :hover,
    :focus {
      position: relative;
      color: #fff68f;

      ::after {
        content: '';

        bottom: 0;
        left: 0;
        height: 5px;
        width: 100%;
        position: absolute;
        background-color: #fff68f;
      }
    }
    &.active {
      position: relative;
      color: #fff68f;
      ::after {
        content: '';

        bottom: 0;
        left: 0;
        height: 5px;
        width: 100%;
        position: absolute;
        /* background-color: #fff68f; */
      }
    }
  }
`;

export const LogoNameBox = styled.div`
  display: block;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const IconLogoBox = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const IconLogoMobBox = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const SiteName = styled.span`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
  }
`;
