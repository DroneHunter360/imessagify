import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Data } from "./Data";

export function Hero() {
    return (
        <Flex mt={10}>
            <Box width={650} height={"fit-content"}>
                <Text
                    bgGradient='linear(rgba(131,58,180,1) 0%, rgba(255,5,5,1) 0%, rgba(252,176,69,1) 100%)'
                    bgClip={'text'}
                    lineHeight={"80px"}
                    fontSize={'60px'}
                    fontWeight={'extrabold'}
                    align={"start"}
                    pt={{base: "30px", md: "90px"}}
                >
                    Transform your Spotify listening history
                </Text>
                <Text
                    align={"start"}
                    pt={"20px"}
                    fontSize={'lg'}
                    pr={"25%"}
                >
                    Experience all your top tracks and artists through the familiar iMessage chat interface, bringing your music habits to life like never before.
                </Text>
                <Flex pt={"30px"}>
                    <Button borderRadius={"20px"}>
                        Get Started
                    </Button>
                </Flex>
            </Box>
            <Box display={{base: "none", md: "block"}} pt="20px" pl={{base: 20}}>
                <Data />
            </Box>
        </Flex>
    );
}

