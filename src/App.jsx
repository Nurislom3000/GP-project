import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from '@mui/material'
import Main from './components/Main'

const App = () => {
	return (
		<div className='flex justify-center'>
			<div className='w-[1440px] flex flex-col h-screen'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}

export default App
