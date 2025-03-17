import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import EducationSystem from '../Pages/SubPages/EducationSystem'
import ComparisonOfSchools from '../Pages/SubPages/ComparisonOfSchools'

const router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/educationSystem' element={<EducationSystem />} />
			<Route path='/comparison' element={<ComparisonOfSchools />} />
		</Routes>
	)
}

export default router
