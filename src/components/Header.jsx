import { Button } from '@mui/material'
import React from 'react'
import Logo from '../assets/Logo'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className='py-[16px] flex justify-between items-center'>
			<NavLink to='/' className='flex gap-[8px]'>
				<Logo />
				<h5 className='font-bold text-[20px] text-[#212121]'>Blog Template</h5>
			</NavLink>
			<nav className='flex gap-[32px] text-[#212121]'>
				<a
					target='blank'
					href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
				>
					Nurislom
				</a>
				<a
					target='blank'
					href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
				>
					Iarik
				</a>
				<a
					target='blank'
					href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
				>
					Robiya
				</a>
				<a href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'>
					Afruza
				</a>
			</nav>
		</div>
	)
}

export default Header
