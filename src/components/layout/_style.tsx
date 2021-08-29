import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
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
    padding: 0.41rem 1.63rem;
    position: relative;
    .add {
      font-size: 2.03rem;
      text-align: center;
      line-height: 4.07rem;
      width: 4.07rem;
      height: 4.07rem;
      border-radius: 50%;
      position: absolute;
      background-color: var(--main-bg-color);
      left: 50%;
      transform: translateX(-50%);
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
