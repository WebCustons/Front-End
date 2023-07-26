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
#root{
  display: flex;
}
body{
  font-family: 'Jost', sans-serif;
  overflow-x: hidden;
  background-color: var(--Color-gray-100);
}

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background-color: var(--colorSecond);
}

::-webkit-scrollbar-thumb {
  background-color: var(--colorPrimary);
}
.container{
  margin: 0 auto;
  max-width: 1200px;
}
@media (max-width: 1000px) {
.container{
  margin: 0 auto;
  width: 100vw;
}
}
`;

export default GlobalStyled