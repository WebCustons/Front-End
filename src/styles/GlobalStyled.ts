import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
  --colorPrimary:#2E1A47;
  --colorSecond:#692c00;
  --bgcolor:#F5F5F5;
  --Color-white-1:#F5F5F5;
  --Color-white-2:#E0E0E0;
  --Color-grey-1:#FFFFFF66;
  --Color-Negative:#E60000;
  --Color-Warning:#FFCD07;
  --Color-Sucess:#168821;
  --Color-Information:#155BCB;
}

body{
  font-family: 'Jost', sans-serif;
  overflow-x: hidden;
  background-color: var(--bgcolor);
}
.container{
  width: 90%;
  margin: 0 auto;
}

@media (min-width: 1000px) {
.container{
  margin: 0 auto;
  width: 1200px;
}
}
`;

export default GlobalStyled