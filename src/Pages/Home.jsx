import React from 'react'
import avatar from '../assets/avatar.jpg'
import Section from '../components/Section'
import Avatar from '../components/UI/Avatar'

const Home = () => {
	return (
		<div>
			<div className='mt-[72px] flex items-end justify-between'>
				<div className='text-primary-large'>
					Knowledge bridges divides and <br />
					opens doors to endless possibilities. Share <br /> the power of
					learning for a brighter world.
				</div>
				<Avatar src={avatar} name='Nurislom' />
			</div>

			<div className='mt-[56px] grid gap-x-[56px] grid-cols-3 justify-between'>
				<Section
					Styles='col-span-2'
					Text={'40'}
					Link={'/educationSystem'}
					Leading={'1'}
					imgHeight={'560'}
					imgURL={
						'https://images.squarespace-cdn.com/content/v1/5b65d763fcf7fd7d0c65108e/1619393744252-Y9NAJNM8R1CGMIMGSIRH/Fixing+the+American+public+school+system.jpg?format=1000w'
					}
					Date={'May 12, 2021'}
					Content={'The Education System (New Regulations and Control) '}
				/>

				<div>
					<Section
						Styles='col-span-1'
						Text={'24'}
						Link={'/comparison'}
						Leading={'1'}
						imgHeight={'200'}
						imgURL={
							'https://i0.wp.com/s3.us-east-2.amazonaws.com/media.nationofchange.org/wp-content/uploads/2016/10/26181710/education.jpg?fit=1000%2C485&ssl=1'
						}
						Date={'May 12, 2021'}
						Content={'The Comparison of schools'}
					/>
					<br />
					<Section
						Styles='col-span-1'
						Text={'24'}
						Link={'/univercityChoice'}
						Leading={'1.33'}
						imgHeight={'200'}
						imgURL={
							'https://cdn.leonardo.ai/users/19013d48-a883-4b72-ac37-57e19a2d89b4/generations/a87680e7-d063-484e-814a-3768b184040c/Leonardo_Phoenix_10_A_whimsical_illustration_of_a_person_stand_2.jpg'
						}
						Date={'May 12, 2021'}
						Content={
							'The University Choices in Future (For 10th/11th Year Students)'
						}
					/>
				</div>
			</div>

			<div className='flex justify-center mt-[56px] text-primary-large'>
				Latest Post
			</div>

			<div className='mt-[56px]'>
				<div className='grid gap-x-[56px] grid-cols-2'>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/publicAndPrivat'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://web.colby.edu/global-elites/files/2016/12/EducationClassWar.jpg'
						}
						Date={'May 12, 2021'}
						Content={'The Strengths and Weaknesses of Public/Private Schools'}
					/>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/improvementOfSchools'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://blog.triaster.co.uk/hs-fs/hubfs/images/blog/ContinuousImprovement.jpg?width=690&height=500&name=ContinuousImprovement.jpg'
						}
						Date={'May 12, 2021'}
						Content={'The Improvement in Education System Throughout the Years'}
					/>
				</div>
				<div className='grid gap-x-[56px] grid-cols-2 mt-[56px]'>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/changesYouWantToSee'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://www.simplypsychology.org/wp-content/uploads/proletariat-revolution.jpeg'
						}
						Date={'May 12, 2021'}
						Content={
							"The Changes Students Want to See in the Country's Education System"
						}
					/>
					<Section
						Styles='col-span-1'
						Text={'27'}
						Link={'/info'}
						Leading={'1.33'}
						imgHeight={'480'}
						imgURL={
							'https://alumni.arizona.edu/sites/default/files/styles/az_large/public/2022-07/is_your_idea_innovative.jpeg.webp?itok=F6C-r8q2'
						}
						Date={'May 12, 2021'}
						Content={
							'Additional Specific Questions on Education (Extracurricular Activities, Parental Support, etc.)'
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
