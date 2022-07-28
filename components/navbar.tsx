import {
    Box,
    Button,
    Flex,
    Divider,
    Stack,
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
                bg="#7289da"
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
                        <Link activeClass="active" to="whoami" spy={true} smooth={true} duration={1000}>
                            <Button colorScheme='messenger' size='lg'>
                                Joseph Phan
                            </Button>
                        </Link>
                    </Flex>

                    <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
                        <Button colorScheme='messenger' variant='outline'>
                            <HamburgerIcon />
                        </Button>
                    </Box>

                    <Box>
                        <Stack
                            spacing={4}
                            direction={{ base: 'column', md: 'row' }}
                            display={{
                                base: isOpen ? 'grid' : 'none',
                                md: 'flex',
                            }}
                            width={{ base: 'full', md: 'auto' }}
                            alignItems="center"
                            flexGrow={1}
                            mt={{ base: 225, md: 0 }}
                        >
                            <Link activeClass="active" to="whoami" spy={true} smooth={true} duration={1000}>
                                <Button colorScheme='blue' size='md'>
                                0. Home
                                </Button>
                            </Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                                <Button colorScheme='blue' size='md'>
                                1. About
                                </Button>
                            </Link>
                            <Link activeClass="active" to="experience" spy={true} smooth={true} duration={1000}>
                                <Button colorScheme='blue' size='md'>
                                2. Experience
                                </Button>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                <Button colorScheme='blue' size='md'>
                                3. Contact
                                </Button>
                            </Link>
                            <Button colorScheme='blue' size='md' variant='outline'>
                                Resume
                            </Button>
                        </Stack>
                    </Box>
                </Flex>
                <Divider borderColor="black" />
            </Box>
        </>
    )
}

export default Navbar
