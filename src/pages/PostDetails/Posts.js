import { useHistory } from 'react-router'
import { FaArrowDown, FaArrowUp, FaImage, FaTimes } from 'react-icons/fa'
import Sidebar from '../HomePage/MainSection/Populars/Sidebar/Sidebar'
import SocialPost from '../HomePage/MainSection/Populars/Socials/SocialCard'
import UserComment from './UserComment'

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
					<div className='flex items-center gap-1'>
						<button>
							<FaArrowUp className='text-2xl' />
						</button>
						<span className='text-sm'>20.4k</span>
						<button>
							<FaArrowDown className='text-2xl' />
						</button>
					</div>

					<button className='flex items-center gap-2'>
						<FaImage />
						<p className='text-sm'>{post.post}</p>
					</button>
				</div>

				<button className='flex items-center gap-1' onClick={goBack}>
					<FaTimes className='text-base' />
					<span className='text-sm'>Close</span>
				</button>
			</header>

			<section className='bg-gray-200 flex gap-3 py-4 w-full px-6'>
				<div className=' m-auto w-9/12'>
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
