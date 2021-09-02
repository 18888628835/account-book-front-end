import styled from 'styled-components';

const Wrap = styled.section`
  .za-nav-bar {
    background-color: var(--main-bg-color);
  }

  .title_cell_container {
    .za-cell__inner {
      max-height: 2.03rem;
      min-height: 0.81rem;
    }
    .za-cell__title,
    .cell_title_wrap {
      font-size: 12px;
    }
  }
  .cell_title_wrap {
    display: flex;
    min-width: 75vw;
    color: black;
    > span {
      text-align: center;
      flex: 1;
    }
  }
  .title {
    background-color: var(--main-bg-color);

    display: flex;
    justify-content: space-around;
  }
  .container {
    white-space: nowrap;
    font-size: 1.3rem;
    > div:nth-child(1) {
      font-size: 0.98rem;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
    .month {
      color: black;
      margin-right: 0.41rem;
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
