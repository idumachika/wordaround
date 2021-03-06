import { useEffect, useState } from 'react'
import TrendingPost from './TrendingPost'

const Trending = () => {
	return (
		<div className='pt-2 sm:hidden'>
			<h2 className='font-semibold text-primary'>Trending today</h2>

			<TrendingPost />
		</div>
	)
}

export default Trending
