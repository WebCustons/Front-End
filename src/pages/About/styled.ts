
import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100%;
  height: 83.4vh;
  display: flex;
  flex-direction: column;
  align-items: center;


  h2 {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
  }

  & > header {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    padding: 50px 0;

    & > a {
      font-size: 15px;
      color: black;
      font-weight: 600;
      position: absolute;
      top: 70px;
      right: 30px;

      :hover {
        opacity: 0.7;
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 520px) {
    padding: 15px;
    background-position-x: right;
    background-position-y: bottom;
    background-size: contain;

    > header {
      padding-bottom: 40px;
      > a {
        position: fixed;
        top: unset;
        bottom: 10px;
        left: 10px;
      }
    }
  }
`;
