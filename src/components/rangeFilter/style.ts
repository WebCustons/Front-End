import { styled } from "styled-components";

export const StyledRangeFilter = styled.div`
  display: flex;
  flex-direction: column;
  .conatinerValue {
    display: flex;
    flex-direction: row;
  }
  .conatinerValue > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input[type="number"] {
    width: 80%;
    border: 2px solid var(--brand1);
    border-radius:5px;
  }
`;
