import styled from 'styled-components';
export const Wrap = styled.div`
  .commonStyle {
    transition: opacity 300ms, transform 300ms;
  }
  /* alert样式 */
  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
    transform-origin: top left;
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  .alert-exit {
    opacity: 1;
    transform-origin: center center;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
  }
  /* LeftIn-RightOut样式 */
  .LeftIn-RightOut-enter {
    opacity: 0;
    transform: translateX(-80%);
  }
  .LeftIn-RightOut-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  .LeftIn-RightOut-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .LeftIn-RightOut-exit-active {
    opacity: 0;
    transform: translateX(80%);
  }
  /* TopIn-BottomOut样式 */
  .TopIn-BottomOut-enter {
    opacity: 0;
    transform: translateY(-80%);
  }
  .TopIn-BottomOut-enter-active {
    transform: translateY(0);
    opacity: 1;
  }
  .TopIn-BottomOut-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .TopIn-BottomOut-exit-active {
    transform: translateY(80%);
    opacity: 0;
  }
  /* BottomIn-TopOut样式 */
  .BottomIn-TopOut-enter {
    opacity: 0;
    transform: translateY(180%);
  }
  .BottomIn-TopOut-enter-active {
    transform: translateY(0);
    opacity: 1;
  }
  .BottomIn-TopOut-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .BottomIn-TopOut-exit-active {
    transform: translateY(-180%);
    opacity: 0;
  }
`;
