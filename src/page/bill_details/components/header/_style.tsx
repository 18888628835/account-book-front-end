import styled from 'styled-components';

const Wrap = styled.header`
  background-color: var(--main-bg-color);
  z-index: 20;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding-left: 16px;
  .nav_bar {
    background-color: inherit;
  }
  .title {
    display: flex;
  }
  .container {
    margin-right: 5rem;
    max-width: 4.88rem;
    white-space: nowrap;
    > div:nth-child(2) {
      font-size: 1.46rem;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
    .month {
      margin-right: 5px;
    }
    /* css实现三角形 */
    .san {
      width: 0;
      height: 0;
      border: 6px solid black;
      border-bottom: none;
      border-right-color: transparent;
      border-left-color: transparent;
    }
  }
`;

export default Wrap;
