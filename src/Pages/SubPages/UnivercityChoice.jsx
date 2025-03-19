import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'
import Avatar from '../../components/UI/Avatar'

const UnivercityChoice = () => {
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
							The University Choices in Future (For 10th/11th Year Students)
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
						src='https://cdn.leonardo.ai/users/19013d48-a883-4b72-ac37-57e19a2d89b4/generations/a87680e7-d063-484e-814a-3768b184040c/Leonardo_Phoenix_10_A_whimsical_illustration_of_a_person_stand_2.jpg'
						alt='#'
					/>
				</div>

				<div className='mt-10 font-paprica flex justify-center text-[50px] text-center'>
					Here students are talking about their thoughts about their future
					<br />
					<br />
				</div>

				<JustBlock
					videoLink='https://www.youtube.com/embed/NJfVHsbHBsc?si=tkzoyxQiFkHPzt29'
					title='What are your university aspirations?'
					text='Students claim that they do have big plants on their future education however, school does not provide enough materials enough opportunities to students prepare for their university exams. The second student argues that the preparation should be from person himself and all depends on one person you.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					isRight={true}
					videoLink='https://www.youtube.com/embed/MJczFgQGqv0?si=8GmJcTp6I_gOKfE5'
					title='Are you planning to study abroad?'
					text='Two students have to different points of views. One of them want to get in Oxford and Westminster universities , however he is concerned about he’s language barrier. The second student argues and tell that MGU which is located in Russia provides even more opportunities.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					videoLink='https://www.youtube.com/embed/lcVHmLnxbrk?si=J7TcY3hy9RzBEwFD'
					title='Univercity (Russian perspective)'
					text='The school does prepare him to 10 and 11 class. They have government exams which are called ОГЭ and ЕГЭ. They study a topic at school  and then take homework based on what they will have in their real exams'
				/>
			</div>
		</div>
	)
}

export default UnivercityChoice
