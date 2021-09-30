import styled from 'styled-components';

const Wrap = styled.section`
  width: 100%;
  > header {
    padding: 5.33vw;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .year_budget {
    margin-top: 3vh;
    text-align: center;
    font-size: 1.309567rem;
    > span:nth-child(1) {
      color: #151515;
    }
    > span:nth-child(2) {
      display: block;
      font-size: 3.43rem;
    }
  }
  .bill_total_container {
    position: absolute;
    bottom: 0;
    z-index: -1;
    height: 72.9vh;
    width: 100%;
    background: #1ebf5c;
    border-radius: 50px 50px 0 0;
    .remain_budget {
      padding: 1.309567rem;
      text-align: center;
      color: white;
      font-size: 0.976007rem;

      > div:nth-child(2) {
        font-size: 2.328119rem;
      }
    }
    .bottom_box {
      width: 100%;
      height: 70%;
      position: absolute;
      background: #ffa177;
      border-radius: 50px 50px 0 0;
      bottom: 0;
      z-index: -1;
    }
    .top_box {
      width: 100%;
      padding-left: 0.873045rem;
      padding-right: 0.873045rem;
      .top_box_content {
        width: 100%;
        height: 41.37vh;
        background-color: white;
        border-radius: 13.33vw;
        padding-top: 6.54vh;
        #bar_charts {
          width: 90%;
          margin: 0 auto;
          height: 18.35vh;
          margin-bottom: 5.54vh;
        }
        .income_outlay_container {
          display: flex;
          text-align: center;
          justify-content: space-around;
          > div:nth-child(1) > span {
            color: #ff754e;
          }
          > div {
            h4 {
              font-size: 1.018552rem;
              color: #979797;
            }
            span {
              font-size: 1.818843rem;
            }
          }
        }
      }
    }
  }
`;

export default Wrap;
