import { useState } from 'react'
import { posts } from '../../../../data/trendingpost'

const TrendingPost = () => {
	const [trending, setTrending] = useState(posts)
	return (
		<section className='mt-3 grid grid-flow-col gap-2'>
			{trending.map((post) => {
				return (
					<a href='#' className='inline-block' title={post.story}>
						<div className='bg-gray-800 h-44 text-white px-4 flex flex-col items-start justify-end pb-4 rounded-lg'>
							<h3 className='font-semibold'>{post.title}</h3>
							<p className='text-sm'>{`${post.story.substring(
								0,
								50
							)}...`}</p>
						</div>
					</a>
				)
			})}
		</section>
	)
}

export default TrendingPost
