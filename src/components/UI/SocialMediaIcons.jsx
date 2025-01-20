import React from 'react'
import {
	Instagram,
	Facebook,
	LinkedIn,
	Youtube,
	X,
} from '../../assets/SocialMedia'

const SocialMediaIcons = () => {
	return (
		<nav className='flex gap-[16px]'>
			<a href='#'>
				<Instagram />
			</a>
			<a href='#'>
				{' '}
				<X />
			</a>
			<a href='#'>
				{' '}
				<LinkedIn />
			</a>
			<a href='#'>
				{' '}
				<Facebook />
			</a>
			<a href='#'>
				{' '}
				<Youtube />
			</a>
		</nav>
	)
}

export default SocialMediaIcons
