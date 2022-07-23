import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Whoami = () => {
	return (
		<Box
			id='whoami'
			minH='100vh'
			bg='grey'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Text color='black' fontSize='4xl'>
				$ whoami
			</Text>
			<Text color='black' fontSize='4xl'>
				Hi, my name is
			</Text>
			<Text color='black' fontSize='4xl'>
				Joseph Phan
			</Text>
			<Text color='black' fontSize='4xl'>
				I build things.
			</Text>
			<Text color='black' fontSize='4xl'>
				I&apos;m a software engineer that builds all kinds of software.
			</Text>
		</Box>
	)
}

export default Whoami
