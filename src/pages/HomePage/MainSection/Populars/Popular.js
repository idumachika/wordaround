import FilterPosts from './FilterPosts'
import SocialPost from './Socials/SocialPost'

const Popular = () => {
	return (
		<section className='w-9/12'>
			<h2 className='font-semibold text-primary'>Popular posts</h2>

			<div>
				<FilterPosts />
				<SocialPost />
			</div>
		</section>
	)
}

export default Popular
