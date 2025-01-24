import React from 'react'

const JustBlock = () => {
	const styleForText = 'font-normal text-[20px] leading-6 text-gray-600'
	return (
		<div className='flex w-[1716px] h-[500px] justify-between items-center gap-10'>
			<iframe
				className='w-1/2 h-full rounded-3xl'
				src='https://www.youtube.com/embed/2CNgchPEIFc?si=GXpEJbW6v6DRAQQ-'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerpolicy='strict-origin-when-cross-origin'
				allowfullscreen
			></iframe>
			<div className='w-1/2 font-paprica'>
				<h4 className='font-main text-[35px] font-bold'>Hello</h4>
				<br />
				<p className={styleForText + ' leading-8 text-[17px]'}>
					Black-and-white photography is a timeless art form that transcends
					trends and technology. By stripping away color, this medium emphasizes
					composition, texture, and emotion, creating images that are both
					powerful and evocative. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Quos, ut illum id laboriosam consequuntur natus quam
					quod quas quia deserunt, quidem vero maxime vitae doloribus alias
					dolorem odit expedita possimus nulla. Ex inventore placeat
					perspiciatis nobis accusamus reprehenderit repellat eveniet, maiores
					obcaecati deleniti quam quasi corporis commodi blanditiis laudantium
					odio corrupti perferendis aspernatur quibusdam, sint, deserunt fuga
					error aut dolorem? Architecto quo dolore facilis, aut veritatis
					tempora in explicabo ea, inventore repellendus vitae voluptatum
					mollitia dolor. Totam praesentium quis harum laudantium ipsum magni
					accusantium sunt sequi iure
				</p>
			</div>
		</div>
	)
}

export default JustBlock
