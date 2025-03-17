import React from 'react'
import VideoPlayer from './VideoPlayer'

const JustBlock = ({ videoLink, title, text, isRight }) => {
	return (
		<div className='flex w-[1716px] h-[500px] justify-between items-center gap-10'>
			{!isRight ? <VideoPlayer src={videoLink} /> : null}
			<div className={`w-1/2 font-paprica flex flex-col items-center`}>
				<h4 className='text-primary-medium'>{title}</h4>
				<br />
				<p className={`text-body leading-8 ${isRight ? 'text-center' : ''}`}>
					{text}
				</p>
			</div>
			{isRight == true ? <VideoPlayer src={videoLink} /> : null}
		</div>
	)
}

export default JustBlock
