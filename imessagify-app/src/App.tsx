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
import { Footer } from "./components/Footer"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box 
      textAlign="center"
      fontSize="xl"
      mb="100px"
      mx={{ base: '30px', md: '5px', lg: '80px', xl: '250px', "2xl": '450px'}}
    >
      <NavBar />
      <Hero />
      <Flex display={{base: "block", md: "none"}} justify={'center'} mt={"280px"}>
        <Data />
      </Flex>
    </Box>
  </ChakraProvider>
)
