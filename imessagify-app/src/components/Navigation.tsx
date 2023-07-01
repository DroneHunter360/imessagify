import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';

export function NavBar() {
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.800')} mx={480}>
        <Flex h={24} alignItems={'center'}>
          <Box>iMessagify</Box>
          <Spacer />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              <ColorModeSwitcher />

              <Menu>
                <MenuButton
                  as={IconButton}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  icon={<HamburgerIcon />} />
                <MenuList alignItems={'center'}>
                  <MenuItem>Login to Spotify</MenuItem>
                  <MenuItem>About</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}