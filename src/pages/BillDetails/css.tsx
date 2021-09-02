import styled from 'styled-components';

const Wrap = styled.section`
  .bill_details_container {
    overflow: scroll;
    /* 去除滚动条 */
    max-height: calc(100vh - 5.37rem - 7.64rem);
  }
  .za-panel__header {
    padding: 0.57rem 1.3rem 0.57rem 1.3rem;
    font-size: 1.14rem;
  }
  .za-cell:after {
    border: none;
    font-size: 1.22rem;
  }
  .za-cell__title {
    padding: 1.22rem 0;
    font-size: 1.22rem;
  }
  .za-panel__body:after {
    border-bottom: none;
  }
`;
export default Wrap;
