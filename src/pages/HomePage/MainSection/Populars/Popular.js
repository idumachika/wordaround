import FilterCard from './FilterCard'
import SocialCard from './Socials/SocialCard'

const Popular = () => {
	return (
		<section className='w-9/12'>
			<h2 className='font-semibold text-primary'>Popular posts</h2>

			<div>
				<FilterCard />
				<SocialCard />
				<SocialCard />
			</div>
		</section>
	)
}

export default Popular
