import {
    Box,
    Flex,
    Divider,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-scroll'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const SiteHeaderHeight = 60

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleToggle = () => (isOpen ? onClose() : onOpen())

    return (
        <>
            <Box
                h={`${SiteHeaderHeight}px`}
                position="fixed"
                top={0}
                right={0}
                left={0}
                bg="white"
                zIndex={1}
            >
                <Flex
                    w="100%"
                    h="100%"
                    justify="space-between"
                    alignItems="center"
                    pr={{ base: 4, md: 10 }}
                    pl={{ base: 4, md: 10 }}
                    color="black"
                >
                    <Flex align="center" mr={2}>
                        <Link
                            activeClass="active"
                            to="whoami"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            {/* <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}> */}
                            Joseph Phan
                            {/* </Text> */}
                        </Link>
                    </Flex>

                    <Box
                        display={{ base: 'block', md: 'none' }}
                        onClick={handleToggle}
                    >
                        <HamburgerIcon />
                    </Box>

                    <Box>
                        <Stack
                            spacing={12}
                            direction={{ base: 'column', md: 'row' }}
                            display={{
                                base: isOpen ? 'block' : 'none',
                                md: 'flex',
                            }}
                            width={{ base: 'full', md: 'auto' }}
                            alignItems="center"
                            flexGrow={1}
                            mt={{ base: 4, md: 0 }}
                        >
                            <Link
                                activeClass="active"
                                to="whoami"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                {/* <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}> */}
                                0. Home
                                {/* </Text> */}
                            </Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                {/* <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}> */}
                                1. About
                                {/* </Text> */}
                            </Link>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                {/* <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}> */}
                                2. Experience
                                {/* </Text> */}
                            </Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                {/* <Text as={'a'} cursor="pointer" _hover={{ color: 'blue' }}> */}
                                3. Contact
                                {/* </Text> */}
                            </Link>
                        </Stack>
                    </Box>
                </Flex>
                <Divider borderColor="black" />
            </Box>
        </>
    )
}

export default Navbar
