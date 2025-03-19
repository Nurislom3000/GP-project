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
							The Improvement in Education System Throughout the Years
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
						src='https://blog.triaster.co.uk/hs-fs/hubfs/images/blog/ContinuousImprovement.jpg?width=690&height=500&name=ContinuousImprovement.jpg'
						alt='#'
					/>
				</div>

				<div className='mt-10 font-paprica flex justify-center text-[50px] text-center'>
					Students are talking about improvements in education system in recent
					years
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
