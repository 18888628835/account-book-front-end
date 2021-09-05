import styled from 'styled-components';

const Wrap = styled.section`
  position: relative;
  .cancel {
    text-align: center;
    position: absolute;
    z-index: 2;
    transform: translateY(58%);
    right: 0;
  }
  .za-tabs__header {
    display: flex;
    justify-content: center;
  }
  .za-tabs__tablist {
    width: 60%;
  }
  .za-tabs__line {
    background-color: var(--main-color);
  }
  .tab_container {
    min-height: 100vh;
  }
  .content {
    padding-left: 3vw;
    padding-right: 3vw;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    margin-right: -2.5%;
    align-content: start;
    height: calc(62vh - 150px);
    /* max-height: calc(62vh - 150px); */

    overflow: scroll;
    /* 去除滚动条 */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    > .icon_wrap {
      width: 20%;
      height: 12vw;
      margin-right: 5%;
      margin-bottom: 5%;
      margin-top: 5%;
      border-radius: 50%;
    }
    .select_icon {
      color: #ce3a53;
    }
  }
  .pad_container {
    bottom: 0;
    width: 100%;
    background-color: white;
    position: absolute;
  }
`;
export default Wrap;
