import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export function DataCard() {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('/user_profile')
            .then((response) => response.json())
            .then((data) => setProfile(data))
            .catch((error) => console.error('Error fetching user profile: ', error));
    }, []);

    return (
        <Box mt={10}>
            <Flex align={'center'} justify={'center'}>
                <Box width={600} height={300} p={10}>
                    <Text
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip={'text'}
                        fontSize={'m'}
                        fontWeight={'bold'}
                    >
                        {profile}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}
