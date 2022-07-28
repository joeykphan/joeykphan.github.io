import Image from 'next/image'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

// todo: image of self here
const About = () => {
	let aboutme = [
		'Hello! My name is Joseph, but you can call me Joey. My interest in computers began early and continued \
		to grow as I did.I graduated Magna Cum Laude with a Bachelors of Science in Computer Science.',
		'Nowadays, I have the privilege of working at a great start-up! I contribute \
		and maintain a diverse array of great projects from designing web user interfaces \
		and coding them out to products that help preserve data against all odds.',
	]
	return (
		<Box
			id='about'
			minH='100vh'
			bg='messenger.200'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			{aboutme &&
				aboutme.length > 0 &&
				aboutme.map((p) => (
					<Text key={aboutme.indexOf(p)} color='black' fontSize='4xl'>
						{p}
					</Text>
				))}
		</Box>
	)
}

export default About
