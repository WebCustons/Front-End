import RoutePages from "./routes";
import { GlobalStyle } from "./styles/GlobalStyled";
import ResetCSS from "./styles/ResetCSS";

export function App() {
  return (
    <>
      <GlobalStyle />
      <ResetCSS />
      <RoutePages />
    </>
  );
}
