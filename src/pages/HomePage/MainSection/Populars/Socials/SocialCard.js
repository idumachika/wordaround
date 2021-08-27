import { FaPlus } from 'react-icons/fa'
import ActionsBtns from './ActionBtns'
import VoteBtns from './VoteBtn'

const SocialPost = ({
	community,
	communityImgUrl,
	postBy,
	post,
	postMediaUrl,
}) => {
	return (
		<>
			<article className='mt-2 p-3 bg-white border sm:px-2'>
				<div>
					<header className='flex items-center justify-between'>
						<div className='flex items-center'>
							<img
								src={communityImgUrl}
								alt=''
								className='w-6 rounded-full sm:w-4'
							/>

							<div className='flex items-center pl-2 text-sm sm:text-xs'>
								<a
									href='#'
									className='font-semibold hover:underline'>
									{community}
								</a>
								<span className='circle'></span>
								<h2 className='text-gray-500 sm:text-xs'>
									Posted by{' '}
									<a href='#' className='hover:underline'>
										{postBy}
									</a>{' '}
									<span>5hrs ago</span>
								</h2>
							</div>
						</div>

						<button className='flex items-center bg-secondary text-white px-3 py-1 rounded-full gap-1 hover:opacity-80 sm:text-xs sm:px-1'>
							<FaPlus />
							<span>Join</span>
						</button>
					</header>

					<p className='pt-2 text-base font-semibold'>{post}</p>

					<div className='pt-2 w-full flex justify-center'>
						<img src={postMediaUrl} alt='' />
					</div>

					<div className='flex items-center gap-3 pt-2'>
						<VoteBtns />
						<ActionsBtns />
					</div>
				</div>
			</article>
		</>
	)
}

export default SocialPost
