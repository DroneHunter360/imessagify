import React, { useEffect, useState } from "react";

import { Avatar, Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react';
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

    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch('/user_profile')
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error('Error fetching user profile: ', error));
    }, []);

    // helper function that gets the user's current time in HH:MM format
    function getTime(date) {
        const localTime = date.toLocaleTimeString().split(':');
        return `${localTime[0]}:${localTime[1]}`
    }

    return (
        <Box bg="#FFF" borderRadius="20px" w="375px" h="812px">
            {console.log(profile)}
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
                            <Avatar w="48px" h="48px" />
                            <Text fontSize="10px" fontWeight="400">
                                iMessagify &#x203A;
                            </Text>
                        </VStack>
                        <Spacer />
                        <Image src={facetime} />
                    </Flex>
                </Box>
            </Box>
            <Box bg="#FFF" h="621px" color="black">
                <Box h="580px">

                </Box>
                <Flex pl="17px" gap="22px">
                    <Image src={camera} />
                    <Image src={storeGreyed} pt="2px" />
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
                        <Image src={Icon} key={index} />
                    ))}
                </Flex>
                <Flex align="center" justify="center" pt="21px" >
                    <Box bg="black" borderRadius="100px" w="135px" h="5px" />
                </Flex>
            </Box>
        </Box>
    );
}