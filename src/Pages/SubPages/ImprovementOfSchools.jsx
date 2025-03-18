import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'
import Avatar from '../../components/UI/Avatar'

const ImprovementOfSchools = () => {
	return (
		<div className='mt-[72px]'>
			<div className='flex flex-col items-center justify-start'>
				<div className='w-[940px]'>
					<div className='flex items-center justify-between'>
						<Avatar src={avatar} name='Amna' />
						<span className='text-[#757575] text-[14px]'>Nov 29, 2025</span>
					</div>
					<div className='flex justify-center mt-[24px]'>
						<div className='text-primary-medium'>
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
					<p className='text-body'>
						Black-and-white photography is a timeless art form that transcends
						trends and technology. By stripping away color, this medium
						emphasizes composition, texture, and emotion, creating images that
						are both powerful and evocative.
					</p>
					<br />
					<br />
					<div className='text-body flex justify-end border-l-2 border-gray-500 pl-5'>
						Whether you're a beginner or a seasoned photographer, exploring
						black-and-white photography can transform how you see the world
						through your lens.
					</div>
					<br />
					<br />
				</div>

				<JustBlock
					videoLink='https://www.youtube.com/shorts/g6PMSFkpIQs?feature=share'
					title='Hello everyone'
					text='Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					isRight={true}
					videoLink='https://www.youtube.com/embed/KKNuO6Zt2SU?si=2WIK4N2gYG3Gl-tW'
					title='Education improvement (Russian perspective)'
					text='He says that the education system became harder and if in the past every person could freely get in every university and school, but now it is more stricter. In his point of view “if the education system becomes harder it improves”'
				/>
			</div>
		</div>
	)
}

export default ImprovementOfSchools
