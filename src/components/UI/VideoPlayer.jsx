import React from 'react'

const VideoPlayer = ({ src, className = '' }) => {
	return (
		<video
			className={`w-1/2 h-full rounded-3xl object-cover ${className}`}
			controls
			playsInline
		>
			<source src={src} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	)
}

export default VideoPlayer
