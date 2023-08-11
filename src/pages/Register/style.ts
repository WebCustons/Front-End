import styled from "styled-components";

const StyledRegister = styled.main`
  font-family: "Lexend", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Inter;
  background-color: var(--brand4);

  .register-box {
    background-color: white;
    padding: 10px;
    margin-top: 20px;
    width: 90%;
    margin-bottom: 20px;
  }
  .register-box h1 {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px;
  }
  .register-btn {
    border-radius: 0.25rem;
    border: 1.5px solid var(--brand-brand-1, #4529e6);
    background: var(--brand-brand-1, #4529e6);
    display: flex;
    height: 3rem;
    padding: 0.75rem 1.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    margin-top: 14px;
    color: var(--whiteFixed);
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  p {
    font-family: "Lexend", sans-serif;
  }
  button {
    font-family: "Lexend", sans-serif;
  }
  .state-box {
    display: flex;
    input {
      width: 90%;
    }
  }
  .number-box {
    display: flex;
    input {
      width: 90%;
    }
  }
  @media (min-width: 600px) {
    .state-box {
      justify-content: space-between;
      div {
        width: 100%;
      }
      input {
        width: 98%;
      }
    }
  }
  @media (min-width: 1000px) {
    .register-box {
      width: 50%;
    }
    .state-box {
      justify-content: space-between;
      div {
        width: 100%;
      }
      input {
        width: 98%;
      }
    }
  }
`;

export default StyledRegister;
