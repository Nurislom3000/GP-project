import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'
import Avatar from '../../components/UI/Avatar'

const EducationSystem = () => {
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
						src='https://images.squarespace-cdn.com/content/v1/5b65d763fcf7fd7d0c65108e/1619393744252-Y9NAJNM8R1CGMIMGSIRH/Fixing+the+American+public+school+system.jpg?format=1000w'
						alt='#'
					/>
				</div>

				<div className='mt-10 font-paprica flex justify-center text-[50px] text-center'>
					Here students are talking about the education system in general
					<br />
					<br />
				</div>

				<JustBlock
					videoLink='https://www.youtube.com/embed/_totk4S0wkk?si=aDAjoelPBQsK089E'
					title='Education system (students perspective)'
					text='Students from public school claims that education system in Uzbekistan was changed but had an inefficient start , for now government is trying to change and make some new laws which will help to progress our education. By contrast , the second student is talking about new regulations the things as electronic diaries and frequency of classes. However , some things don’t make up together , so our government and school are collaborating to stop this problem'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					isRight={true}
					videoLink='https://www.youtube.com/embed/I8C4Wj_dHv4?si=TX-Lz_Orkko4q22Q'
					title='What changes did Uzbekistan see in education'
					text='The student informs us about a new platform named “serebri “ , which was brought in not a long time ago and it is a set of questions that prepares you to international PIZA exam which checks your maths , Russian and literature skills. The second student believes that if it will go so on like this and our education will continue developing , our economy will see a growth'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					videoLink='https://www.youtube.com/embed/AOJ-LOqzz-I'
					title='Hello everyone'
					text='Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					isRight={true}
					videoLink='https://www.youtube.com/embed/zEqe_sreanU?si=3_WubnmK3nWEnMGB'
					title='Education system (Russia perspective)'
					text='Boy from Russia describes the education system there. There is kindergarten , school , upper school and university. You can get there either by passing exams which will give you free education , or you can pay. He also says that exams get also harder and harder'
				/>
			</div>
		</div>
	)
}

export default EducationSystem
