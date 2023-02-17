import Image from 'next/image'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

// todo: image of self here
const About = () => {
	let aboutme = [
		'Hello! My name is Joseph, but you can call me Joey. My interest in computers began early and continued \
		to grow as I did. I graduated Magna Cum Laude with a Bachelors of Science in Computer Science.',
		'Nowadays, I have the privilege of working at a great start-up! I contribute \
		and maintain a diverse array of great projects. From designing web user interfaces, \
		coding out their APIs, developing Machine Learning models for data mining \
		and programming it all out to products and platforms that help preserve data against all odds.',
	]
	return (
		<Box
			id='about'
			minH='100vh'
			bg='#2E303E'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Text color='#E95678' fontSize='4xl' justifyContent='center' align='center'>
				1. About Me
			</Text>
			{aboutme &&
				aboutme.length > 0 &&
				aboutme.map((p) => (
					<Text
						key={aboutme.indexOf(p)}
						color='#F09383'
						fontSize='2xl'
						mt={25}
						maxWidth={800}
						align='center'
					>
						{p}
					</Text>
				))}
		</Box>
	)
}

export default About
