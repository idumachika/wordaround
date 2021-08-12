import { FaImage, FaLink } from 'react-icons/fa'
import Header from '../HomePage/Header'

const CommunityProfile = () => {
	return (
		<>
			<Header />

			<section>
				<div>
					<div>
						<img
							src='https://www.reddit.com/r/MadeMeSmile/'
							alt=''
							className='w-full h-1/5'
						/>
						<div>
							<img
								src='https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?format=pjpg&s=4cc161bfc83fc7595c62d661a34facbaa1c4c874'
								alt=''
								className='w-6 rounded-full'
							/>

							<div>
								<div>
									<h2>MadeMeSmile</h2>
									<button>Join</button>
								</div>
								<p>r/MadeMeSmile</p>
							</div>
						</div>
					</div>

					<button>Posts</button>
				</div>

				<div>
					<img
						src='https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?format=pjpg&s=4cc161bfc83fc7595c62d661a34facbaa1c4c874'
						alt=''
						className='w-6 rounded-full'
					/>

					<input type='text' placeholder='Create Post' />

					<div>
						<FaImage />
						<FaLink />
					</div>
				</div>
			</section>
		</>
	)
}

export default CommunityProfile
