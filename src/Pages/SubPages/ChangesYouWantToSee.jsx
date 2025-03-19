import React from 'react'
import avatar from '../../assets/avatar.jpg'
import SocialMediaIcons from '../../components/UI/SocialMediaIcons'
import JustBlock from '../../components/UI/JustBlock'
import Avatar from '../../components/UI/Avatar'

const ChangesYouWantToSee = () => {
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
							The Changes Students Want to See in the Country's Education System
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
						src='https://www.simplypsychology.org/wp-content/uploads/proletariat-revolution.jpeg'
						alt='#'
					/>
				</div>

				<div className='mt-10 font-paprica flex justify-center text-[50px] text-center'>
					Students are talking about improvements they want to see in education
					system
					<br />
					<br />
				</div>

				<JustBlock
					videoLink='https://www.youtube.com/shorts/MmyEJ1zuhpM?feature=share'
					title='Hello everyone'
					text='Black-and-white photography is a timeless art form that transcends trends and technology. By stripping away color, this medium emphasizes composition, texture, and emotion, creating images that are both powerful and evocative.'
				/>
				<div className='w-full h-1 mt-[100px]'></div>
				<JustBlock
					isRight={true}
					videoLink='https://www.youtube.com/embed/9LxwM0ZkLa8?si=3PUGsUcBnP5TcksU'
					title='Changes that Russian student wants to see'
					text='Schools should prioritize improving meal quality by using fresher, healthier, and higher-quality ingredients. Many students reportedly attend school primarily for the food, making it essential to ensure meals are both nutritious and enjoyable. Enhancing food standards would support students health and contribute to a better learning environment.'
				/>
			</div>
		</div>
	)
}

export default ChangesYouWantToSee
