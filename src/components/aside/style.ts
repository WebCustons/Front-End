import { styled } from "styled-components";

export const StyledAside = styled.aside`
  ul {
    border-bottom: 20px;
    padding-bottom: 30px;
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  .range_container {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 700;
      font-size: 1.2rem;
    }
    input[type="range"] {
      -webkit-appearance: none;
      margin-right: 15px;
      width: 200px;
      height: 7px;
      background: var(--brand1);
      border-radius: 5px;
      background-image: var(--brand1);
      background-size: 70% 100%;
      background-repeat: no-repeat;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: var(--brand1);
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background 0.3s ease-in-out;
    }
  }
  button {
      height: 40px;
      width: 100%;
      background-color: var(--random4);
      color: white;
      font-weight: 600;
      margin-top: 40px;
    }
`;
