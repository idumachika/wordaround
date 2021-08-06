import Header from '../HomePage/Header'
import Posts from './Posts'

const PostDetails = () => {
	return (
		<>
			<Header />
			<section className='bg-gray-400'>
				<div className='w-10/12 bg-black m-auto'>
					<Posts />
				</div>
			</section>
		</>
	)
}

export default PostDetails
