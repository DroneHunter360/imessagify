import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { NavBar } from "./components/Navigation"
import { Hero } from "./components/Hero"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <NavBar />
      <Hero />
    </Box>
  </ChakraProvider>
)
