import React from 'react'

import avatar from '../assets/avatar.jpg'
import Section from '../components/Section'

const Home = () => {
	return (
		<div>
			<div className='mt-[72px] flex items-end justify-between'>
				<div className='font-main leading-[1.14] text-primary text-[56px] font-medium'>
					Engage with ideas{' '}
					<span className='text-[#a0a0a0]'>
						that spark change and <br /> creativity. Stay informed on
					</span>
					what’s shaping <br /> the world around you.{' '}
					<span className='text-[#a0a0a0]'>
						Discover the stories <br /> that
					</span>{' '}
					fuel inspiration and connection
				</div>
				<div className='gap-[16px] flex items-center'>
					<img
						className='w-[56px] h-[56px] rounded-full'
						src={avatar}
						alt='#'
					/>
					<span className='font-poppins text-[18px] font-medium text-secondary'>
						Amna
					</span>
				</div>
			</div>

			<div className='mt-[56px] grid gap-x-[56px] grid-cols-3 justify-between'>
				<Section
					Styles='col-span-2'
					Text={'40'}
					Link={'/'}
					Leading={'1'}
					imgHeight={'560'}
					imgURL={
						'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
					}
					Date={'May 12, 2021'}
					Content={'The Art of Black-and-White Photography'}
				/>

				<div>
					<Section
						Styles='col-span-1'
						Text={'24'}
						Link={'/'}
						Leading={'1'}
						imgHeight={'200'}
						imgURL={
							'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
						}
						Date={'May 12, 2021'}
						Content={'The Art of Black-and-White Photography'}
					/>
					<br />
					<Section
						Styles='col-span-1'
						Text={'24'}
						Link={'/'}
						Leading={'1.33'}
						imgHeight={'200'}
						imgURL={
							'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
						}
						Date={'May 12, 2021'}
						Content={
							'The Importance of Editing: Polishing Your Work as a Personal'
						}
					/>
				</div>
			</div>

			<div className='flex justify-center mt-[56px] text-primary font-main text-[48px] leading-[1.33] font-semibold'>
				Latest Post
			</div>

			<div className='mt-[56px]'>
				<div className='grid gap-x-[56px] grid-cols-2'>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
						}
						Date={'May 12, 2021'}
						Content={
							"Overcoming Writer's Block: Strategies for Personal Authors"
						}
					/>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
						}
						Date={'May 12, 2021'}
						Content={'Crafting a Personal Brand as an Author: Tips for Success'}
					/>
				</div>
				<div className='grid gap-x-[56px] grid-cols-2 mt-[56px]'>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
						}
						Date={'May 12, 2021'}
						Content={
							'The Art of Writing: How Personal Authors Find Inspiration Everywhere'
						}
					/>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
						}
						Date={'May 12, 2021'}
						Content={
							'The Journey of a Personal Author: Crafting Stories and Building Connections'
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
