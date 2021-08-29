import styled from 'styled-components';

const Wrap = styled.section`
  flex: 1;
  background-color: #f6f6f6;
  .user_info_header {
    background-color: white;
    header {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 2.03rem;
    }
    .avatar_name {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .name {
      margin-left: 10px;
    }
    .avatar_wrap {
      display: flex;
      margin-top: 1.63rem;
      justify-content: space-between;
      align-items: center;
      .da_ka {
        width: 70px;
        text-align: center;
      }
    }
    .user_data {
      justify-content: space-between;
      display: flex;
      margin-top: 1.22rem;
      > div {
        display: flex;
        text-align: center;
        flex-direction: column;
      }
    }
  }

  .bill_container {
    margin: 15px 0;
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    .za-cell:after {
      border: none;
    }
    .za-cell__inner {
      min-height: 0;
    }
    .za-cell__title {
      padding: 8px 0px;
    }
    .bill_wrap {
      padding: 0 16px;
      .bill {
        display: flex;
        > div {
          display: flex;
          white-space: nowrap;
          margin-right: 4.88rem;
          flex-direction: column;
          justify-content: center;
        }
        .wrap_text {
          flex: 1;
          margin-right: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          > div {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .circle_wrap {
      .progress_text {
        > span {
          font-weight: 400;
        }
        > span:first-child {
          font-size: 12px;
          margin-bottom: 5px;
        }
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
export default Wrap;
