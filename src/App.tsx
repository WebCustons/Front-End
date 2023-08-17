import RoutePages from "./routes"
import { GlobalStyle } from "./styles/GlobalStyled"
import ResetCSS from "./styles/ResetCSS"
import { ChakraProvider } from "@chakra-ui/react"

export function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <ResetCSS />
        <RoutePages />
      </ChakraProvider>
    </>
  )
}
