import styled from "styled-components";

const StyledLogin = styled.main`
  font-family: "Lexend", sans-serif;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Inter;
  background-color: var(--brand4);

  .login-box {
    background-color: white;
    padding: 10px;
    width: 90%;
  }
  .login-box h1 {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px;
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
  .btn-login {
    background-color: var(--brand1);
    display: flex;
    width: 17.88081rem;
    height: 3rem;
    padding: 0.75rem 1.75rem;
    justify-content: center;
    align-items: center;
    color: var(--whiteFixed);
    font-weight: bold;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
  }
  .register-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
  }
  .register-btn {
    border-radius: 0.25rem;
    border: 1.5px solid var(--grey-scale-grey-4, #adb5bd);
    display: flex;
    width: 17.88081rem;
    height: 3rem;
    padding: 0.75rem 1.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    color: var(--grey0);
    font-weight: bold;
  }
  .remember-password {
    display: flex;
    justify-content: end;
    padding: 8px;
    font-family: "Lexend", sans-serif;
    font-size: 0.8rem;
    color: var(--grey3);
  }
  .not-acount {
    color: var(--grey3);
    font-weight: bold;
  }
  @media (min-width: 600px) {
    .login-box {
      width: 80%;
    }
  }
  .confirm-box {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .btn-login,
  .register-btn {
    width: 100%;
  }
  @media (min-width: 1000px) {
    .login-box {
      width: 30%;
    }
  }
`;

export default StyledLogin;
