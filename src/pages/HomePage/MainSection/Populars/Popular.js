import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FilterCard from './FilterCard'
import SocialCard from './Socials/SocialCard'

const Popular = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://wordaround-api.herokuapp.com/userposts')
			.then((response) => response.json())
			.then((post) => {
				console.log(post)
				setPosts(post)
			})
	}, [])

	return (
		<section className='w-9/12'>
			<h2 className='font-semibold text-primary'>Popular posts</h2>

			<div>
				<FilterCard />
				{posts.map((post) => (
					<Link to={`/post/${post.id}`}>
						<SocialCard {...post} key={post.id} />
					</Link>
				))}
			</div>
		</section>
	)
}

export default Popular
