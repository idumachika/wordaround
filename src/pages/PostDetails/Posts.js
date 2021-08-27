import { useHistory } from 'react-router'
import { FaArrowDown, FaArrowUp, FaImage, FaTimes } from 'react-icons/fa'
import Sidebar from '../HomePage/MainSection/Populars/Sidebar/Sidebar'
import SocialPost from '../HomePage/MainSection/Populars/Socials/SocialCard'
import UserComment from './UserComment'
import VoteBtns from '../HomePage/MainSection/Populars/Socials/VoteBtn'

const Posts = ({ post }) => {
	const history = useHistory()

	const goBack = () => {
		// console.log('heelo')
		history.goBack()
	}

	return (
		<>
			<header className='text-white py-4 px-3 flex items-center justify-between'>
				<div className='flex items-center gap-5'>
					<VoteBtns />

					<button className='flex items-center gap-2 md:hidden'>
						<FaImage />
						<p className='text-sm'>{post.post}</p>
					</button>
				</div>

				<button className='flex items-center gap-1' onClick={goBack}>
					<FaTimes className='text-base' />
					<span className='text-sm'>Close</span>
				</button>
			</header>

			<section className='bg-gray-200 flex gap-3 py-4 w-full px-6 sm:px-1'>
				<div className='m-auto w-9/12 md:w-11/12 sm:w-screen'>
					<SocialPost {...post} />
					<div className='flex flex-col'>
						{typeof post.comments != 'undefined'
							? post.comments.map((comment, index) => (
									<UserComment {...comment} key={index} />
							  ))
							: ''}
					</div>
				</div>

				<Sidebar />
			</section>
		</>
	)
}

export default Posts
