import React from 'react'

const Avatar = ({ src, name }) => {
	return (
		<div className='avatar-container'>
			<img className='avatar-image' src={src} alt={name} />
			<span className='text-secondary-style'>{name}</span>
		</div>
	)
}

export default Avatar
