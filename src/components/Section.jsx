import React from 'react'
import { NavLink } from 'react-router-dom'

const Section = ({
	imgHeight,
	imgURL,
	Date,
	Content,
	Styles,
	Leading,
	Link,
	Text,
}) => {
	return (
		<NavLink className={Styles} to={Link} style={{ width: 'auto' }}>
			<div style={{ height: `${imgHeight}px`, overflow: 'hidden' }}>
				<img
					className='w-full h-full rounded-[12px] object-cover border-[2px] border-solid border-gray-500'
					src={imgURL}
					alt='#'
				/>
			</div>
			<p
				style={{
					marginTop: '20px',
					lineHeight: Leading,
					fontSize: `${Text}px`,
					fontWeight: '500',
				}}
				className='text-primary-medium'
			>
				{Content}
			</p>
			<p className='mt-[12px] text-small'>{Date}</p>
		</NavLink>
	)
}

export default Section
