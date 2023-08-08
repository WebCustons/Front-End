import styled from "styled-components";

const StyledHome = styled.main`
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

export default StyledHome;
