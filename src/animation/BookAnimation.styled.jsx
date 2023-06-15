import styled from '@emotion/styled';

import { FaRegHandPointer } from 'react-icons/fa';
import { FcCellPhone } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

export const Logotype = styled(FcCellPhone)`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const LogotypeMob = styled(FcCellPhone)`
  display: block;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const HandIcon = styled(FaRegHandPointer)`
  @keyframes changePositionHand {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(10px);
    }
  }

  animation-name: changePositionHand;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const HandIconMob = styled(FaRegHandPointer)`
  @keyframes changePositionHand {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(10px);
    }
  }

  animation-name: changePositionHand;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  display: block;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const BookLink = styled(NavLink)`
  border-radius: 50%;
  padding: 0px 10px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    background-color: #d6d6d6;
  }
`;

export const Back = styled.div`
  @keyframes changePositionBack {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-20deg) scale(1.1);
    }
  }
  animation-name: changePositionBack;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  background: -webkit-linear-gradient(
      left,
      #559ad4 0%,
      #559ad4 1%,
      rgba(255, 255, 255, 0) 3%
    ),
    -webkit-linear-gradient(-45deg, #52a5ea 0%, #3b8fd6 46%, #2a7dc2 90%, #3e97e4
          100%);
  background: -moz-linear-gradient(
      left,
      #559ad4 0%,
      #559ad4 1%,
      rgba(255, 255, 255, 0) 3%
    ),
    -moz-linear-gradient(-45deg, #52a5ea 0%, #3b8fd6 46%, #2a7dc2 90%, #3e97e4
          100%);
  background: -o-linear-gradient(
      left,
      #559ad4 0%,
      #559ad4 1%,
      rgba(255, 255, 255, 0) 3%
    ),
    -o-linear-gradient(-45deg, #52a5ea 0%, #3b8fd6 46%, #2a7dc2 90%, #3e97e4
          100%);

  box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.3) inset, 0px 2px 0px #244f73,
    0px 3px 0px #27567e, 0px 10px 40px #222;
  border-left: 1px solid #242424;
  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const PageSix = styled.div`
  @keyframes changePositionSix {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-50deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionSix;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;
  overflow: hidden;
  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background: #fdfdfd;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const PageFive = styled.div`
  @keyframes changePositionFive {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-130deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionFive;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background: #fafafa;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const PageFore = styled.div`
  @keyframes changePositionFore {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-40deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionFore;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background: #f5f5f5;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const PageThree = styled.div`
  @keyframes changePositionThree {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-140deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionThree;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background: #f5f5f5;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const PageTwo = styled.div`
  @keyframes changePositionTwo {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-30deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionTwo;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background: #efefef;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const PageOne = styled.div`
  @keyframes changePositionOne {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-150deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionOne;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  background: #efefef;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;
export const Front = styled.div`
  @keyframes changePositionFront {
    0% {
      transform: rotateZ(-20deg) rotateY(0) scale(2);
    }
    20% {
      transform: rotateZ(-20deg) rotateY(0) scale(1);
    }

    100% {
      transform: rotateZ(-20deg) rotateY(-160deg) scale(1.1);
      box-shadow: 0 1em 3em 0 rgba(0, 0, 0, 0.2);
    }
  }
  animation-name: changePositionFront;
  animation-duration: 3000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: forwards;

  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left center;

  background: -webkit-linear-gradient(
      left,
      #559ad4 0%,
      #559ad4 1%,
      rgba(255, 255, 255, 0) 3%
    ),
    -webkit-linear-gradient(-45deg, #52a5ea 0%, #3b8fd6 46%, #2a7dc2 90%, #3e97e4
          100%);
  background: -moz-linear-gradient(
      left,
      #559ad4 0%,
      #559ad4 1%,
      rgba(255, 255, 255, 0) 3%
    ),
    -moz-linear-gradient(-45deg, #52a5ea 0%, #3b8fd6 46%, #2a7dc2 90%, #3e97e4
          100%);
  background: -o-linear-gradient(
      left,
      #559ad4 0%,
      #559ad4 1%,
      rgba(255, 255, 255, 0) 3%
    ),
    -o-linear-gradient(-45deg, #52a5ea 0%, #3b8fd6 46%, #2a7dc2 90%, #3e97e4
          100%);

  box-shadow: 0px 2px 2px rgba(255, 255, 255, 0.3) inset, 0px 2px 0px #244f73,
    0px 3px 0px #27567e, 0px 10px 40px #222;
  border-left: 1px solid #242424;
  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  :after {
    content: '';
    position: absolute;

    height: 20px;
    width: 2px;
    margin-left: -1px;
    background: #b8cbdb;
    border-right: 1px solid #315c83;
    margin-top: 15px;
    @media screen and (min-width: 370px) {
      height: 30px;
      margin-top: 10px;
    }
    @media screen and (min-width: 900px) {
      height: 40px;
      margin-top: 30px;
    }
  }
  :before {
    content: '';
    position: absolute;

    height: 20px;
    width: 2px;
    margin-left: -1px;
    background: #b8cbdb;
    border-right: 1px solid #315c83;
    margin-top: 20px;
    @media screen and (min-width: 370px) {
      height: 30px;
      margin-top: 20px;
    }
    @media screen and (min-width: 900px) {
      height: 40px;
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 100%;
  }
`;

export const Book = styled.div`
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 50%;
  width: 90px;
  height: 120px;
  backface-visibility: visible;
  @media screen and (min-width: 370px) {
    width: 110px;
    height: 150px;
  }
  @media screen and (min-width: 900px) {
    top: 25%;
    left: 25%;
    width: 150px;
    height: 200px;
  }
`;
export const BookTitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: #1362a5;
  text-align: center;
  padding-top: 30px;
  text-shadow: 0px 1px 3px #69afec;
  font-size: 12px;
  margin: 0px;
  @media screen and (min-width: 370px) {
    padding-top: 50px;
    font-size: 14px;
  }
  @media screen and (min-width: 900px) {
    padding-top: 80px;
    font-size: 20px;
  }
`;
export const BookLabel = styled.p`
  text-transform: uppercase;
  color: #1362a5;
  text-align: center;

  text-shadow: 0px 1px 3px #69afec;

  font-family: 'Arial', sans-serif;
  padding-top: 5px;
  font-size: 6px;
  box-shadow: 0px -1px #1362a5;
  border-top: 1px solid #69afec;
  margin: 0px 10px;
  @media screen and (min-width: 370px) {
    font-size: 8px;
  }
  @media screen and (min-width: 900px) {
    font-size: 10px;
  }
`;

export const BookList = styled.ul``;
export const BookItem = styled.ul``;
export const BookText = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-size: 6px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.12;

  padding: 2px;
  @media screen and (min-width: 370px) {
    font-size: 8px;
  }
  @media screen and (min-width: 900px) {
    font-size: 11px;
  }
`;
