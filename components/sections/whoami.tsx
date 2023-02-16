import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Whoami = () => {
	return (
		<Box
			id='whoami'
			minH='100vh'
			bg='#232530'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Text color='#29D398' fontSize='4xl'>
				~ $ whoami
			</Text>
			<Text color='#F09383' fontSize='4xl'>
				Hi, my name is
			</Text>
			<Text color='#E95678' fontSize='6xl'>
				Joseph Phan
			</Text>
			<Text color='#F09383' fontSize='4xl'>
				Software Engineer | Fullstack Web Developer | Programmer
			</Text>
			<Text color='#F09383' fontSize='4xl'>
				I&apos;m a software engineer that builds all kinds of software.
			</Text>
		</Box>
	)
}

export default Whoami
