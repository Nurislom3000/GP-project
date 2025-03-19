import React from 'react'
import VideoPlayer from './VideoPlayer'

const JustBlock = ({ videoLink, title, text, isRight }) => {
	const getEmbedUrl = url => {
		// Handle YouTube Shorts URL
		if (url.includes('/shorts/')) {
			const videoId = url.split('/shorts/')[1].split('?')[0]
			return `https://www.youtube.com/embed/${videoId}`
		}
		// Handle regular YouTube URL
		return url
	}

	const getOriginalUrl = url => {
		// Handle YouTube Shorts URL
		if (url.includes('/shorts/')) {
			return url
		}
		// Handle embed URL
		if (url.includes('/embed/')) {
			const videoId = url.split('/embed/')[1].split('?')[0]
			return `https://www.youtube.com/watch?v=${videoId}`
		}
		return url
	}

	return (
		<div className='flex w-[1716px] h-[500px] justify-between items-center gap-10'>
			{!isRight ? (
				<a
					href={getOriginalUrl(videoLink)}
					target='_blank'
					rel='noopener noreferrer'
					className='cursor-pointer'
				>
					<iframe
						className='rounded-2xl border-2'
						width='50%'
						height='100%'
						src={getEmbedUrl(videoLink)}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</a>
			) : null}
			<div className={`w-1/2 font-paprica flex flex-col items-center`}>
				<h4 className='text-primary-medium'>{title}</h4>
				<br />
				<p className={`text-body leading-8 ${isRight ? 'text-center' : ''}`}>
					{text}
				</p>
			</div>
			{isRight == true ? (
				<a
					href={getOriginalUrl(videoLink)}
					target='_blank'
					rel='noopener noreferrer'
					className='cursor-pointer'
				>
					<iframe
						className='rounded-2xl border-2'
						width='50%'
						height='100%'
						src={getEmbedUrl(videoLink)}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</a>
			) : null}
		</div>
	)
}

export default JustBlock
