import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Hero() {
    return (
        <Box mt={10}>
            <Flex align={'center'} justify={'center'}>
                <Box width='50%'>
                    <Text
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip={'text'}
                        fontSize={'6xl'}
                        fontWeight={'extrabold'}
                    >
                        Visualize your musical journey
                    </Text>
                </Box>
                <Box>
                    <Text>Hello</Text>
                </Box>
            </Flex>
        </Box>
    );
}

