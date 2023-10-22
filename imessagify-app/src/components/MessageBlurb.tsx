import React, { useEffect, useState } from "react";

import { Box, Flex, Image, Text, calc } from '@chakra-ui/react';
import tooltip from "../assets/icons/Tooltip.svg";
import { relative } from "path";

export function MessageBlurb(props: MessageBlurbProps) {
    const tooltipHeight = props.height - 13;

    return (
        <Box>
            <Box zIndex={"1"} width={`${props.width}px`} borderRadius={"20px"} height={"fit-content"} pb="7px" pr="12px" bg="#E9E9EB" ml={"5px"} mt={"5px"} position={"absolute"}>
                <Flex align={"center"} pl={"12px"} pt={"5px"}>
                    <Text fontSize={"sm"}>{props.song}</Text>
                </Flex>
            </Box>
            <Image src={tooltip} paddingTop={`${tooltipHeight}px`} pl={"2px"}/>
        </Box>
    );
}

interface MessageBlurbProps {
    width: number;
    height: number;
    song: string;
}