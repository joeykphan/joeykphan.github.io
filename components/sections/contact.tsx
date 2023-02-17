import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

let contactme = [
	'Get in touch with me!',
	'My inbox is always open, send me a message on LinkedIn or Github.',
	'Click the links below to go directly there.'
]

const Contact = () => {
	return (
		<Box
			id='contact'
			minH='100vh'
			bg='#2E303E'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Text color='#E95678' fontSize='4xl' justifyContent='center' align='center'>
				3. Contact Me
			</Text>
			{contactme &&
				contactme.length > 0 &&
				contactme.map((p) => (
					<Text
						key={contactme.indexOf(p)}
						color='#F09383'
						fontSize='2xl'
						mt={25}
						maxWidth={800}
						align='center'
					>
						{p}
					</Text>
				))}
			<div>
				<a target="_blank" href={'https://www.linkedin.com/in/joseph-phan-17b430227/'} rel="noopener noreferrer">
					<Text color='#B877DB' fontSize='2xl'>LinkedIn</Text>
					{/* <Image src="/public/linkedin.svg" width="70" height="70" alt="LinkedIn Logo"/> */}
				</a>
				<a target="_blank" href={'https://github.com/joeykphan'} rel="noopener noreferrer">
					<Text color='#B877DB' fontSize='2xl'>Github</Text>
					{/* <Image src="/public/Github.svg" width="70" height="70" alt="Github Logo" /> */}
				</a>
			</div>
		</Box>
	)
}

export default Contact
