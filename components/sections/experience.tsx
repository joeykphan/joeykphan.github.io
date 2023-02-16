import React from 'react'
import { Box, Text } from '@chakra-ui/react'

let safaiexp = [
	'> Built performant APIs that serves data to client dashboards',
	'> Designed and built clean and fast dashboards for the front-end',
	'> Deployed our platform into client systems, seamlessly integrating with \
	their existing infrastructure',
	'> Developed two machine learning toolchains to assist in data mining and \
	extracting meaningful insights from massive data sets',
]

const Experience = () => {
	return (
		<Box
			id='experience'
			minH='100vh'
			bg='#232530'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Text color='#E95678' fontSize='4xl' justifyContent='center' align='center'>
				2. Professional Experience
			</Text>
			<Text color='#F09383' fontSize='4xl'>
				Software Engineer @ saf.ai
			</Text>
			<Text color='#F09383' fontSize='1xl'>
				SEPTEMBER 2019 - PRESENT
			</Text>
			{safaiexp &&
				safaiexp.length > 0 &&
				safaiexp.map((p) => (
					<Text
						key={safaiexp.indexOf(p)}
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

export default Experience
