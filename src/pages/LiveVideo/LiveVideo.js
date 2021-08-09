import {
	FaBan,
	FaFlag,
	FaHamburger,
	FaRegPaperPlane,
	FaReply,
	FaShare,
	FaArrowUp,
	FaArrowDown,
	FaPlus,
} from 'react-icons/fa'
import Header from '../HomePage/Header'
import dummyVideo from '../../assets/javascript.mp4'

const LiveVideo = () => {
	return (
		<>
			<Header />

			<section className='bg-gray-800 flex items-center h-auto'>
				<div className='m-auto flex bg-gray-300 h-full rounded-lg overflow-hidden'>
					<div>
						<video
							src={dummyVideo}
							autoplay
							loop
							controls
							className='h-3/6'></video>
						<div className='hidden'>
							<div>
								<p>Live</p>
								<h2>music and sea in Sardina, italy</h2>
								<div>
									<p>r/distancing</p>
									<button>
										<FaPlus />
										<span>join</span>
									</button>
								</div>
								<p>25 watchers</p>
							</div>
							<div>
								<img
									src='https://styles.redditmedia.com/t5_x9eag/styles/profileIcon_jw210aqchff61.jpg?width=256&height=256&crop=256:256,smart&s=3078e8c7548842849af2268366fb5d2892e65d5d'
									alt=''
								/>
								<div>
									<button>
										<FaHamburger />
									</button>
								</div>

								<div>
									<button>
										<FaShare />
									</button>
								</div>

								<div className='flex items-center gap-1'>
									<button className='hover:text-green-600 hover:bg-gray-200 p-1'>
										<FaArrowUp />
									</button>
									<span className='text-sm font-semibold'>
										433
									</span>
									<button className='hover:text-red-600 hover:bg-gray-200 p-1'>
										<FaArrowDown />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div>
						<ul>
							<li>
								<img
									src='https://styles.redditmedia.com/t5_4or7qt/styles/profileIcon_snoo9afd912e-7a7f-4027-a44f-7f664a993ce6-headshot.png?width=256&height=256&crop=256:256,smart&s=ac6a3f3e1bc92726295854159fbb7028ecb49dfa'
									alt=''
								/>
								<div>
									<div className='hidden'>
										<button title='reply'>
											<FaReply />
										</button>
										<button title='report'>
											<FaFlag />
										</button>
										<button title='block user'>
											<FaBan />
										</button>
									</div>
									<div>
										<h2>fruitraja</h2>
										<span>1 hour ago</span>
									</div>
									<p>
										are u russian or italian or something
										else?
									</p>
								</div>
							</li>
						</ul>

						<form>
							<div>
								<label htmlFor='comment'>Comment</label>
								<input
									type='text'
									name='comment'
									id='comment'
									placeholder='Send message (250 character limit)'
								/>
							</div>
							<button>
								<FaRegPaperPlane />
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default LiveVideo
