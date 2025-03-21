import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'
import Avatar from '../../components/UI/Avatar'

const ComparisonOfSchools = () => {
	return (
		<div className='mt-[72px]'>
			<div className='flex flex-col items-center justify-start'>
				<div className='w-[940px]'>
					<div className='flex items-center justify-between'>
						<Avatar src={avatar} name='Amna' />
						<span className='text-[#757575] text-[14px]'>Nov 29, 2025</span>
					</div>
					<div className='flex justify-center mt-[24px]'>
						<div className='text-primary-medium'>The Comparison of schools</div>
					</div>
					<div className='h-44px bg-[#f4f4f4] text-[#757575] px-3 py-[10px] rounded-xl flex justify-between items-center mt-10'>
						<p>6 Mins Read</p>
						<SocialMediaIcons />
					</div>
				</div>

				<div className='w-[1716px] h-[660px] mt-8 overflow-hidden object-cover'>
					<img
						className='w-full rounded-xl'
						src='https://i0.wp.com/s3.us-east-2.amazonaws.com/media.nationofchange.org/wp-content/uploads/2016/10/26181710/education.jpg?fit=1000%2C485&ssl=1'
						alt='#'
					/>
				</div>

				<div className='mt-10 font-paprica flex justify-center text-[50px] text-center'>
					Here are some opinion of different students about different schools
					schools
					<br />
					<br />
				</div>

				<JustBlock
					videoLink='https://www.youtube.com/embed/pcJkHxhJiro?si=PcqIzQkA2ZwcUcyd'
					title='Hello everyone'
					text='Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					isRight={true}
					videoLink='https://www.youtube.com/embed/OAuJMYYQCqQ?si=AIZeN8LYx2kOJaoe'
					title='Hello everyone'
					text='Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					videoLink='https://www.youtube.com/embed/47eXbTVTJjI?si=PF31klB6EbRun5OY'
					title='Hello everyone'
					text='Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative.'
				/>
			</div>
		</div>
	)
}

export default ComparisonOfSchools
