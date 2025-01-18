import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	)
}

export default router
