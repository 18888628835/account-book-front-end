import styled from 'styled-components';

const Wrap = styled.section`
  .za-nav-bar__title {
    font-size: 1.46rem;
  }
  .bill_details_container {
    max-height: calc(100vh - 7.889386rem);
    overflow: auto;
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
  .icon_remark_wrap {
    display: flex;
    align-items: center;
    > div:nth-child(1) {
      margin-right: 0.81rem;
    }
  }
`;
export default Wrap;
