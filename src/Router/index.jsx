import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Info from '../Pages/SubPages/Info'

const router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/info' element={<Info />} />
		</Routes>
	)
}

export default router
