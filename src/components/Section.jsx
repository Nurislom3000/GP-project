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
					className='w-full h-full rounded-[12px] object-cover'
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
				className=' font-main text-primary'
			>
				{Content}
			</p>
			<p
				style={{ fontWeight: '400' }}
				className='mt-[12px] text-[24px] text-secondary'
			>
				{Date}
			</p>
		</NavLink>
	)
}

export default Section
