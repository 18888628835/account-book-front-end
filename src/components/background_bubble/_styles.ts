import styled from 'styled-components';

const Wrap = styled.ul`
  overflow: hidden;
  position: absolute;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  z-index: -1;
  li {
    background-color: var(--main-bg-color);
    border-radius: 15px;
    display: flex;
    position: absolute;
    z-index: -1;
    bottom: -200px;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    color: var(--main-color);
    animation: bubble 15s infinite;
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 60px;
      height: 60px;
      animation-duration: 7s;
      animation-delay: 2s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      background-color: rgba(#fff, 0.3);
      animation-duration: 8s;
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 50%;
      width: 80px;
      height: 80px;
      background-color: rgba(#fff, 0.2);
      animation-delay: 3s;
    }
    &:nth-child(7) {
      left: 32%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 40px;
      height: 40px;
      font-size: 12px;
      animation-duration: 15s;
      animation-delay: 4s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 40px;
      height: 40px;
      background-color: rgba(#fff, 0.3);
      font-size: 12px;
      animation-duration: 12s;
      animation-delay: 2s;
    }
    &:nth-child(10) {
      left: 5%;
      width: 70px;
      height: 70px;
      animation-delay: 5s;
    }
  }

  @keyframes bubble {
    0% {
      opacity: 0.5;
      transform: translateY(0) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }
`;
export default Wrap;