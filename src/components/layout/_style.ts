import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .link_list {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    position: relative;
    .add {
      font-size: 25px;
      text-align: center;
      line-height: 50px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      background-color: var(--main-bg-color);
      right: 0;
      top: -100%;
    }
    .link_wrap {
      flex: 1;
      .select {
        color: #333333;
      }
      a {
        color: var(--main-color);
      }
    }
  }
`;
export default Wrap;
