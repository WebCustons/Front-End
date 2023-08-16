import styled from "styled-components";

const StyledFooter = styled.footer`
  background: var(--grey0);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;

    p {
      padding-right: 90px;
    }

    img {
      width: 150px;
      height: 60px;
    }
  }

  p {
    color: var(--grey10);
  }

  img {
    width: 250px;
    height: 80ox;
  }

  button {
    background: var(--grey1);
    padding: 10px;
    width: 50px;
    height: 50px;

    svg {
      background: none;
      color: var(--brand4);
      margin: auto;
      width: 30px;
      cursor: pointer;
    }
  }
`;

export default StyledFooter;
