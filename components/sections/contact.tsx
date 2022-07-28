import React from 'react'
import { Box, Text, Center } from '@chakra-ui/react'

const Contact = () => {
	return (
		<Box
			id='contact'
			minH='100vh'
			bg='messenger.400'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Text color='black' fontSize='4xl'>
				Get in touch with me!
			</Text>
		</Box>
	)
}

export default Contact
