import styled from 'styled-components';

const Wrap = styled.section<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .foot_container {
    background-color: ${props => props.backgroundColor};
    border-radius: 13.333vw 13.333vw 0 0;
    padding: 6.667vw;
    padding-top: 16px;
    .link_list {
      display: flex;
      justify-content: space-between;
      padding: 5.333vw;
      border-radius: 8.8vw;
      background: #ffffff;
    }
    .link_wrap {
      flex: 1;
      color: var(--main-color);
      .select {
        color: #ff6b29;
      }
    }
    .link_wrap:nth-child(3) {
      order: 1;
    }
  }
`;
export default Wrap;
