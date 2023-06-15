import styled from '@emotion/styled';

export const ChildrenBox = styled.div`
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  max-width: 700px;
`;

export const Notification = styled.p`
  @keyframes changeSize {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.1);
    }
  }

  animation-name: changeSize;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  padding: 20px 40px;
  font: 20px;
  border-radius: 5px;
  border: 1px solid red;
  color: white;
  background-color: red;
  margin-bottom: 20px;
`;

export const Figure = styled.figure`
  $unit: 60vmin;
  margin-left: 2em;
  height: 1.43 * $unit;
  width: $unit;
  line-height: 1.43 * $unit;
  border-width: $unit/20;
  border-radius: $unit/14;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #111),
    url(https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_1__csuokryyjb42_large.jpg);
  z-index: 100;
  display: block;
  /* color: #fff; */
  text-align: center;
  font-family: 'SF Pro Display', Helvetica Neue, Arial, sans-serif;
  letter-spacing: -0.022em;
  font-size: 2.5vmin;
  text-shadow: 0 0 0.5em #000;
  background-color: #000;
  background-size: auto 200%, cover;
  background-repeat: no-repeat, no-repeat;
  border: solid #111;
  margin-bottom: 2em;
  position: relative;
  box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33), 0 0 0 0.5px #000 inset;
  transition: all 0.1s linear, line-height 0s linear;
  background-position: 50% 100%, center;
  transform-origin: bottom center;
  &:hover,
  :focus {
    /* color: transparent; */
    text-shadow: 0 0 0em transparent;
    background-position: 50% -100%, center center;
    transition: all 0.15s linear, line-height 5s linear;
    box-shadow: 0 0.5em 3em 0.25em rgba(0, 0, 0, 0.33), 0 0 0 1px #000 inset;
    transform: scale(1.0025);
    /* line-height: 0vmin; */
  }
`;
