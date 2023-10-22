import React, { useEffect, useState } from "react";

import { Avatar, Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { MessageBlurb } from "./MessageBlurb";

import { ReactComponent as Battery } from "../assets/icons/Battery.svg";
import { ReactComponent as Cellular } from "../assets/icons/CellularConnection.svg";
import { ReactComponent as Wifi } from "../assets/icons/Wifi.svg";
import applePay from "../assets/icons/AppApplePay.svg";
import arrow from "../assets/icons/Arrow.svg";
import camera from "../assets/icons/Camera.svg";
import diagram from "../assets/icons/AppDiagram.svg";
import dictation from "../assets/icons/Dictation.svg";
import facetime from "../assets/icons/Facetime.svg";
import fitness from "../assets/icons/AppFitness.svg";
import heart from "../assets/icons/AppHeart.svg";
import memoji from "../assets/icons/AppMemoji.svg";
import photos from "../assets/icons/AppPhotos.svg";
import store from "../assets/icons/AppStore.svg";
import storeGreyed from "../assets/icons/AppStoreGreyed.svg";

export function Data() {
    const appIcons = [photos, store, applePay, fitness, diagram, memoji, heart];
    const date = getTime(new Date());

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetch('/logged_in')
            .then(res => res.json())
            .then(data => setLoggedIn(data))
            .catch(error => console.log('Error fetching logged in state: ', error));
    }, []);

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if (loggedIn) {
            fetch('/top_tracks')
                .then(response => response.json())
                .then(data => setTracks(data))
                .catch(error => console.error('Error fetching user profile: ', error));
        }
    }, [loggedIn]);

    // helper function that gets the user's current time in HH:MM format
    function getTime(date) {
        const localTime = date.toLocaleTimeString().split(':');
        return `${localTime[0]}:${localTime[1]}`
    }

    return (
        <Box bg="#FFF" borderRadius="20px" minW="349px" h="712px">
            <Box borderTopRadius="20px" bg="#F1F1F2" h="116px">
                <Box h="44px" color="black">
                    <Flex align="center" gap="4px" pl="35px" pr="16px" pt="15px">
                        <Text as="b" fontSize="14px">
                            {date}
                        </Text>
                        <Spacer />
                        <Cellular />
                        <Wifi />
                        <Battery />
                    </Flex>
                    <Flex pl="5px" pr="18px">
                        <Image src={arrow} />
                        <Spacer />
                        <VStack>
                            {/*{profile.images[0]?.url ? (<Image src={profile.images[0]["url"]} borderRadius="25px" />) : (<Avatar w="48px" h="48px" />)}
                            <Image src={profile.images[0]["url"]} borderRadius="25px" />*/}
                            <Avatar w="48px" h="48px" ml={"10px"} />
                            <Text fontSize="10px" fontWeight="400" pl={"10px"}>
                                iMessagify &#x203A;
                            </Text>
                        </VStack>
                        <Spacer />
                        <Image src={facetime} />
                    </Flex>
                </Box>
            </Box>
            <Box bg="#FFF" h="521px" color="black">
                <Box h="480px">
                    <Box textAlign={'left'} pl={"6px"}>
                        <Text fontSize="10px" textAlign={"center"} color="#909093" pt={"5px"}>iMessage</Text>
                        <Text fontSize="10px" textAlign={"center"} color="#909093">Saturday 8:08 PM</Text>
                        {tracks ? tracks.map((songInfo, index) => (
                                <MessageBlurb key={index} width={300} height={33} song={`${index + 1}. ${songInfo[0]} - ${songInfo[1]}`}></MessageBlurb>
                        )) : <Text>Nothing currently</Text>}
                    </Box>
                </Box>
                <Flex pl="15px" pr="15px" gap="19px">
                    <Image src={camera} pt="3px" w={"10%"} h={"10%"} />
                    <Image src={storeGreyed} pt="6px" w={"10%"} h={"10%"} />
                    <Box borderRadius="100px" border="1px solid #C8C8CC" w="235px" h="34px">
                        <Flex align="center" pl="13.5px" pr="3.5px" mt="2.5px">
                            <Text color="#3C3C434D" fontSize="15px" fontWeight="400">
                                iMessage
                            </Text>
                            <Spacer />
                            <Image src={dictation} />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box borderBottomRadius="20px" bg="#F1F1F2" h="75px">
                <Flex h="41px" align="center" gap="14px" pl="13px" pt="9px">
                    {appIcons.map((Icon, index) => (
                        <Image src={Icon} key={index} w={"85%"} h={"85%"}/>
                    ))}
                </Flex>
                <Flex align="center" justify="center" pt="21px" >
                    <Box bg="black" borderRadius="100px" w="135px" h="5px" />
                </Flex>
            </Box>
        </Box>
    );
}