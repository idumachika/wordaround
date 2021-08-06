import { FaPlus } from 'react-icons/fa'
import ActionsBtns from './ActionBtns'

const SocialPost = () => {
	return (
		<article className='mt-3 p-3 pl-14 rounded bg-white'>
			<div>
				<header className='flex items-center justify-between'>
					<div className='flex items-center'>
						<img
							src='https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?format=pjpg&s=4cc161bfc83fc7595c62d661a34facbaa1c4c874'
							alt=''
							className='w-6 rounded-full'
						/>

						<div className='flex items-center pl-2 text-sm'>
							<h2 className='font-semibold'>
								r/mildlyintersting
							</h2>
							<span className='circle'></span>
							<h2 className='text-gray-500'>
								Posted by u/OranguPanda <span>5 hours ago</span>
							</h2>
						</div>
					</div>

					<button className='flex items-center bg-secondary text-white px-3 py-1 rounded-full gap-1 hover:opacity-80'>
						<FaPlus />
						<span>Join</span>
					</button>
				</header>

				<p className='pt-2 text-lg font-semibold'>
					This ornamental hand at my local IKEA with the middle finger
					ziptied down
				</p>

				<div className='pt-2 w-96 flex m-auto'>
					<img
						src='https://preview.redd.it/6ta2p7iryze71.jpg?width=640&height=853&crop=smart&auto=webp&s=14f2550aaa260beae4f5ea9663ea384865df832d'
						alt=''
					/>
				</div>

				<ActionsBtns />
			</div>
		</article>
	)
}

export default SocialPost
