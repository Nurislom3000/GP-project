import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'

const Info = () => {
	const styleForText = 'font-normal text-[20px] leading-6 text-gray-600'
	return (
		<div className='mt-[72px]'>
			<div className='flex flex-col items-center justify-start'>
				<div className='w-[940px]'>
					<div className='gap-[16px] flex items-center'>
						<img
							className='w-[56px] h-[56px] rounded-full'
							src={avatar}
							alt='#'
						/>
						<span className='font-poppins text-[18px] font-medium text-secondary'>
							Amna
						</span>
						<span className='text-[#757575] text-[14px]'>Nov 29, 2025</span>
					</div>
					<div className='flex justify-center mt-[24px]'>
						<div className='font-main leading-[1.14] text-primary text-[40px] font-medium'>
							The Education System (New Regulations and Control)
						</div>
					</div>
					<div className='h-44px bg-[#f4f4f4] text-[#757575] px-3 py-[10px] rounded-xl flex justify-between items-center mt-10'>
						<p>6 Mins Read</p>
						<SocialMediaIcons />
					</div>
				</div>

				<div className='w-[1716px] h-[660px] mt-8 overflow-hidden object-cover'>
					<img
						className='w-full rounded-xl'
						src='https://cdn.leonardo.ai/users/19013d48-a883-4b72-ac37-57e19a2d89b4/generations/4ee63f8e-b2d1-453f-a771-1bcce9cc3738/Leonardo_Phoenix_10_A_vibrant_and_dynamic_illustration_showcas_2.jpg'
						alt='#'
					/>
				</div>

				<div className='w-[1040px] mt-10 font-paprica'>
					<p className={styleForText}>
						Black-and-white photography is a timeless art form that transcends
						trends and technology. By stripping away color, this medium
						emphasizes composition, texture, and emotion, creating images that
						are both powerful and evocative.
					</p>
					<br />
					<br />
					<div
						className={
							styleForText + ' flex justify-end border-l-2 border-gray-500 pl-5'
						}
					>
						Whether you’re a beginner or a seasoned photographer, exploring
						black-and-white photography can transform how you see the world
						through your lens.
					</div>
					<br />
					<br />
				</div>

				<JustBlock />
			</div>
		</div>
	)
}

export default Info
