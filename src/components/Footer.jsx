import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo'
import avatar from '../assets/avatar.jpg'
import SocialMediaIcons from './UI/SocialMediaIcons'

const Footer = () => {
	return (
		<div className='mt-[72px] py-[80px] mx-[-80px]'>
			{/* <div className='mt-[72px] flex items-end justify-between'>
				<div className='font-main leading-[1.14] text-primary text-[56px] font-medium'>
					Engage with ideas{' '}
					<span className='text-[#a0a0a0]'>
						that spark change and creativity. Stay <br />
						informed on
					</span>
					what’s shaping the world around you.{' '}
					<span className='text-[#a0a0a0]'>
						Discover
						<br /> the stories that
					</span>{' '}
					fuel inspiration and connection
				</div>
			</div> */}
			<div className='py-[16px] mt-[80px] flex justify-between items-center'>
				<NavLink to='/' className='flex gap-[8px]'>
					<Logo />
					<h5 className='font-bold text-[20px] text-[#212121]'>
						Blog Template
					</h5>
				</NavLink>
				<div className='gap-[16px] flex items-center'>
					<img
						className='w-[56px] h-[56px] rounded-full'
						src={avatar}
						alt='#'
					/>
					<span className='font-poppins text-[18px] font-medium text-secondary'>
						Amna
					</span>
				</div>
			</div>

			<div className=' mt-[32px] w-full h-[1px] bg-[#a0a0a0] opacity-50'></div>

			<div className='mt-[32px]  flex justify-between items-center'>
				<p
					style={{ fontWeight: '400' }}
					className='text-[14px] leading-[1.5] text-primary'
				>
					© 2025 Blog Template. All rights reserved.
				</p>

				<SocialMediaIcons />
			</div>
		</div>
	)
}

export default Footer
