import styled from 'styled-components';
const Wrap = styled.main`
  display: flex;
  flex-flow: column;
  flex: 1;
  height: 100vh;
  .fly {
    display: flex;
    justify-content: center;
    max-height: 16.26rem;
    flex: 1;
    img {
      max-height: 16.26rem;
    }
  }
  > section {
    flex: 1;
    height: 100%;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 1.3rem;
  }

  .login_container {
    flex: 1;
    .form_container {
      width: 100%;
    }
    .MuiTextField-root {
      width: 100%;
    }
    .input_wrap {
      padding: 1.3rem;
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;
    padding: 1.3rem;
  }
`;
export default Wrap;
