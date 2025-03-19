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
			<a
				target='blank'
				href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
			>
				<Instagram />
			</a>
			<a
				target='blank'
				href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
			>
				{' '}
				<X />
			</a>
			<a
				target='blank'
				href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
			>
				{' '}
				<LinkedIn />
			</a>
			<a
				target='blank'
				href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
			>
				{' '}
				<Facebook />
			</a>
			<a
				target='blank'
				href='https://www.youtube.com/channel/UCk9VATWD_9fAW0611S89OgQ'
			>
				{' '}
				<Youtube />
			</a>
		</nav>
	)
}

export default SocialMediaIcons
