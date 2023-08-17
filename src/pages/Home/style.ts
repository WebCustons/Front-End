import styled from "styled-components";

export const StyledHome = styled.main`
  position: relative;
`;

export const StyledButtonsMenu = styled.div`
  display: flex;
  padding: 10px;
  gap: 25px;
`;

export const StyledButtonMenuItemRegister = styled.button`
  color: var(--grey0);
  font-weight: bold;
  margin-top: -15px;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ContainerList = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: fit-content;
  ul {
    display: flex;
    gap: 1.5rem;
    margin: 1rem;
    justify-content: center;
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

  ul li:hover {
    box-shadow: 1px 1px 5px black;
    transition: 0.5s;
  }

  ul li:hover p {
    display: block;
  }

  cursor: pointer;
  @media (min-width: 600px) {
    overflow-x: unset;
    display: flex;
    justify-content: center;
    ul {
      width: 100%;
      max-width: 700px;
      flex-wrap: wrap;
    }
  }
  @media (min-width: 1200px) {
    overflow-x: unset;
    ul {
      width: 100%;
      max-width: 1000px;
      flex-wrap: wrap;
    }
  }
`;

export const StyledBannerPageHome = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  z-index: -1;
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
