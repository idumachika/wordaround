import { useState } from 'react'
import { posts } from '../../../../data/trendingpost'

const TrendingPost = () => {
	const [trending, setTrending] = useState(posts)
	return (
		<section className='mt-3 grid grid-flow-col gap-2'>
			{trending.map((post) => {
				return (
					<a href='#' className='inline-block' title={post.story}>
						<div className='bg-gray-800 h-44 text-white px-4 pt-20 rounded-lg'>
							<h3 className='font-semibold'>{post.title}</h3>
							<p>{`${post.story.substring(0, 45)}...`}</p>
						</div>
					</a>
				)
			})}
		</section>
	)
}

export default TrendingPost
