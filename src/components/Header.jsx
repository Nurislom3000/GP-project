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
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/info'>Blog</NavLink>
				<NavLink to='/'>Single Post</NavLink>
				<NavLink to='/'>Other Pages</NavLink>
			</nav>
		</div>
	)
}

export default Header
