import styled from "styled-components";

export const StyledHome = styled.main`
  position: relative;
`;

export const StyledButtonsMenu = styled.div`
  display: flex;
  padding: 10px;
  gap: 25px;
`;

export const StyledButtonLogin = styled.button`
  color: var(--grey2);
  font-weight: bold;
`;

export const StyledButtonRegister = styled.button`
  color: var(--grey0);
  font-weight: bold;
  border: 1px solid var(--grey4);
  padding: 5px;
  width: 100px;
`;

export const StyledButtonMenuItemRegister = styled.button`
  color: var(--grey0);
  font-weight: bold;
  height: 100vh;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerList = styled.div`
  overflow-x: scroll;
  height: fit-content;
  ul {
    display: flex;
    gap: 3rem;
    margin: 1rem;
    width: fit-content;
    height: fit-content;
    flex-wrap: nowrap;
  }
  ul li {
    animation: fadeinout 1s linear;
    -webkit-animation: fadeinout 3s;
    -moz-animation: fadeinout 3s;
    -o-animation: fadeinout 3s;
    -ms-animation: fadeinout 3s;
    @keyframes fadeinout {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media (min-width: 992px) {
    overflow-x: unset;
    ul {
      width: 100%;
      max-width: 1032px;
      flex-wrap: wrap;
    }
  }
`;

export const StyledBannerPageHome = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  text-align: center;

  img {
    max-width: 100%;
    height: 450px;
    width: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    top: 30%;
    left: 0%;
    right: 0%;
    color: var(--grey10);
    font-weight: bold;
    font-size: 25px;
  }

  p {
    font-size: 25px;
    max-width: 100%;
    min-width: 250px;
    position: absolute;
    top: 40%;
    left: 0%;
    right: 0%;
    margin: auto;
    color: var(--grey10);
    font-family: "Lexend", sans-serif;
    font-weight: bold;
  }
`;
