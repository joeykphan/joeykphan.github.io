import type { NextPage } from 'next'
import Head from 'next/head'

import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Experience from '../components/sections/experience'
import Whoami from '../components/sections/whoami'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Joseph Phan</title>
				<meta name='description' content='Personal website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />
				<Whoami />
				<About />
				<Experience />
				<Contact />
			</main>
		</>
	)
}

export default Home
