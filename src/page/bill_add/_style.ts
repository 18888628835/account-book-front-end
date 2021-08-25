import styled from 'styled-components';

const Wrap = styled.section`
  position: relative;
  .cancel {
    width: 10vw;
    height: 10vw;
    text-align: center;
    position: absolute;
    z-index: 2;
    line-height: 15vw;
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
    align-content: start;
    height: calc(62vh - 150px);
    /* max-height: calc(62vh - 150px); */
    margin-right: -5vw;
    overflow: scroll;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    > .icon_wrap {
      color: var(--main-color);
      width: 13vw;
      height: 13vw;
      margin: 5vw;
      border-radius: 50%;
    }
    .select_icon {
      color: black;
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
