/*
 * @Author: 邱彦兮
 * @Date: 2021-10-04 22:44:42
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-02-02 19:24:06
 * @FilePath: /account-book-front-end/src/components/background_bubble/_styles.ts
 */
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
    &:nth-child(2n + 0) {
      left: 10%;
    }
    &:nth-child(2n + 1) {
      left: 20%;
      width: 60px;
      height: 60px;
      animation-duration: 7s;
      animation-delay: 2s;
    }

    &:nth-child(3n) {
      width: 60px;
      height: 60px;
      background-color: rgba(#fff, 0.3);
      left: 30%;
      animation-delay: 4s;
    }

    &:nth-child(4n) {
      left: 40%;
      width: 80px;
      height: 80px;
      background-color: rgba(#fff, 0.2);
      animation-delay: 3s;
    }
    &:nth-child(5n) {
      left: 50%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
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
