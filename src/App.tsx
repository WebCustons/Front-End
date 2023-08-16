import RoutePages from "./routes";
import { GlobalStyle } from "./styles/GlobalStyled";
import ResetCSS from "./styles/ResetCSS";
import {ChakraBaseProvider} from '@chakra-ui/react';

export function App() {
  return (
    <>
    <ChakraBaseProvider>
      <GlobalStyle />
      <ResetCSS />
      <RoutePages />
    </ChakraBaseProvider>
    </>
  );
}
