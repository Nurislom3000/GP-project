import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'
import Avatar from '../../components/UI/Avatar'

const PublicAndPrivat = () => {
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
							The Strengths and Weaknesses of Public/Private Schools
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
						src='https://web.colby.edu/global-elites/files/2016/12/EducationClassWar.jpg'
						alt='#'
					/>
				</div>

				<div className='mt-10 font-paprica flex justify-center text-[50px] text-center'>
					Here is the opinion of russian student about public and private
					schools
					<br />
					<br />
				</div>

				<JustBlock
					videoLink='https://www.youtube.com/embed/STEz5Z3krD8?si=REdFKlu9dEpN0ZWY'
					title='Combination of public and private schools'
					text='If public and private schools end up merging into a single system, a significant number of parents will inevitably find themselves losing a considerable amount of their hard-earned money due to the changes in the educational structure and associated costs.'
				/>
			</div>
		</div>
	)
}

export default PublicAndPrivat
