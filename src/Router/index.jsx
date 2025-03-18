import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import EducationSystem from '../Pages/SubPages/EducationSystem'
import ComparisonOfSchools from '../Pages/SubPages/ComparisonOfSchools'
import UnivercityChoice from '../Pages/SubPages/UnivercityChoice'
import ChangesYouWantToSee from '../Pages/SubPages/ChangesYouWantToSee'
import ImprovementOfSchools from '../Pages/SubPages/ImprovementOfSchools'

const router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/educationSystem' element={<EducationSystem />} />
			<Route path='/comparison' element={<ComparisonOfSchools />} />
			<Route path='/univercityChoice' element={<UnivercityChoice />} />
			<Route path='/changesYouWantToSee' element={<ChangesYouWantToSee />} />
			<Route path='/improvementOfSchools' element={<ImprovementOfSchools />} />
		</Routes>
	)
}

export default router
