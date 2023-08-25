import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
} from "@chakra-ui/react"
import { NavBar } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { Data } from "./components/Data"
import { DataCard } from "./components/DataCard"
import { Footer } from "./components/Footer"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" mb="100px">
      <NavBar />
      <Hero />
      <Flex justify={'center'}>
        <Data />
      </Flex>
    </Box>
  </ChakraProvider>
)
