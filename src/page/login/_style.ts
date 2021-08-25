import styled from 'styled-components';
const Wrap = styled.main`
  display: flex;
  flex-flow: column;
  flex: 1;
  height: 100vh;
  .fly {
    display: flex;
    justify-content: center;
    height: 200px;
    img {
      height: 200px;
      margin-bottom: 10;
    }
  }
  > section {
    flex: 1;
    margin-top: 35px;
    height: 100%;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 16px;
  }

  .login_container {
    .form_container {
      width: 100%;
    }
    .MuiTextField-root {
      width: 100%;
    }
    .input_wrap {
      padding: 16px;
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }
`;
export default Wrap;
