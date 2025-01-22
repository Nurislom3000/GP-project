import React from 'react'
import avatar from '../assets/avatar.jpg'
import SocialMediaIcons from '../components/UI/SocialMediaIcons'

const Info = () => {
	const styleForText = 'font-normal text-[20px] leading-6 text-gray-600'
	return (
		<div className='mt-[72px]'>
			<div className='flex flex-col items-center justify-start'>
				<div className='w-[640px]'>
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
							The Art of Black-and-White Photography
						</div>
					</div>
					<div className='h-44px bg-[#f4f4f4] text-[#757575] px-3 py-[10px] rounded-xl flex justify-between items-center mt-10'>
						<p>6 Mins Read</p>
						<SocialMediaIcons />
					</div>
				</div>

				<div className='w-[1816px] h-[660px] mt-8 overflow-hidden object-cover'>
					<img
						className='w-full rounded-xl'
						src='https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
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
					<div>
						<h5 className='text-[25px] text-red-700 '>
							Why Black-and-White Photography?
						</h5>
						<br />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							dolorum beatae minima quidem placeat mollitia veniam maxime
							facilis quia soluta iusto sequi explicabo voluptate iure, rerum
							quasi perferendis, laborum veritatis quod atque libero assumenda
							rem corrupti? Ducimus vero vel ipsam facilis. Id odio assumenda
							tenetur eligendi, magni iste. Illo libero id tempora molestiae nam
							cupiditate, sunt accusantium consequatur? Dignissimos, eligendi.
							Corrupti molestiae iure, enim fugit maiores placeat mollitia
							aperiam delectus doloremque quibusdam, ducimus saepe soluta esse
							at nesciunt eaque eos dolores assumenda? Cum deserunt amet dolor?
							Assumenda temporibus necessitatibus provident eligendi culpa non!
							Commodi architecto optio facilis aspernatur veniam deserunt?
						</p>
					</div>
					<br />
					<br />
					<div>
						<h5 className='text-[20px]'>Why Black-and-White Photography?</h5>
						<br />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							dolorum beatae minima quidem placeat mollitia veniam maxime
							facilis quia soluta iusto sequi explicabo voluptate iure, rerum
							quasi perferendis, laborum veritatis quod atque libero assumenda
							rem corrupti? Ducimus vero vel ipsam facilis. Id odio assumenda
							tenetur eligendi, magni iste. Illo libero id tempora molestiae nam
							cupiditate, sunt accusantium consequatur? Dignissimos, eligendi.
							Corrupti molestiae iure, enim fugit maiores placeat mollitia
							aperiam delectus doloremque quibusdam, ducimus saepe soluta esse
							at nesciunt eaque eos dolores assumenda? Cum deserunt amet dolor?
							Assumenda temporibus necessitatibus provident eligendi culpa non!
							Commodi architecto optio facilis aspernatur veniam deserunt?
						</p>
					</div>
					<br />
					<br />
					<div>
						<h5 className='text-[20px]'>Why Black-and-White Photography?</h5>
						<br />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							dolorum beatae minima quidem placeat mollitia veniam maxime
							facilis quia soluta iusto sequi explicabo voluptate iure, rerum
							quasi perferendis, laborum veritatis quod atque libero assumenda
							rem corrupti? Ducimus vero vel ipsam facilis. Id odio assumenda
							tenetur eligendi, magni iste. Illo libero id tempora molestiae nam
							cupiditate, sunt accusantium consequatur? Dignissimos, eligendi.
							Corrupti molestiae iure, enim fugit maiores placeat mollitia
							aperiam delectus doloremque quibusdam, ducimus saepe soluta esse
							at nesciunt eaque eos dolores assumenda? Cum deserunt amet dolor?
							Assumenda temporibus necessitatibus provident eligendi culpa non!
							Commodi architecto optio facilis aspernatur veniam deserunt?
						</p>
					</div>
					<br />
					<br />
					<div>
						<h5 className='text-[20px]'>Why Black-and-White Photography?</h5>
						<br />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
							dolorum beatae minima quidem placeat mollitia veniam maxime
							facilis quia soluta iusto sequi explicabo voluptate iure, rerum
							quasi perferendis, laborum veritatis quod atque libero assumenda
							rem corrupti? Ducimus vero vel ipsam facilis. Id odio assumenda
							tenetur eligendi, magni iste. Illo libero id tempora molestiae nam
							cupiditate, sunt accusantium consequatur? Dignissimos, eligendi.
							Corrupti molestiae iure, enim fugit maiores placeat mollitia
							aperiam delectus doloremque quibusdam, ducimus saepe soluta esse
							at nesciunt eaque eos dolores assumenda? Cum deserunt amet dolor?
							Assumenda temporibus necessitatibus provident eligendi culpa non!
							Commodi architecto optio facilis aspernatur veniam deserunt?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
