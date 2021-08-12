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
	FaTimes,
} from 'react-icons/fa'
import Header from '../HomePage/Header'
import dummyVideo from '../../assets/javascript.mp4'

const LiveVideo = () => {
	return (
		<>
			<Header />

			<section className='bg-gray-800 flex items-center h-screen'>
				<div className='m-auto flex bg-gray-600 h-5/6 rounded-lg shadow-md relative'>
					<div className='absolute top-2 -right-16 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
						<button className='text-2xl text-primary'>
							<FaTimes />
						</button>
					</div>

					<div className='relative transition-opacity'>
						<video
							src={dummyVideo}
							autoPlay
							loop
							controls
							className='h-full'></video>

						<div className='absolute top-0 flex justify-between text-white h-5/6 w-full opacity-0 hover:opacity-95'>
							<div className='self-end px-4 flex flex-col items-start pb-8'>
								<p className='py-1 px-3 uppercase rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 font-semibold'>
									Live
								</p>
								<h2 className='pt-3 font-bold text-lg'>
									music and sea in Sardina, italy
								</h2>
								<div className='flex items-center text-sm'>
									<a href='#' className='underline'>
										r/distancing
									</a>
									<button
										title='join'
										className='flex items-center ml-4 text-primary p-1 rounded-full bg-gray-50'>
										<FaPlus />
										<span className='pl-1'>Join</span>
									</button>
								</div>
								<p className='text-sm pt-2 text-gray-500'>
									25 watchers
								</p>
							</div>
							<div className='flex flex-col items-center gap-4 text-lg px-3 self-end'>
								<div className='relative'>
									<img
										src='https://styles.redditmedia.com/t5_x9eag/styles/profileIcon_jw210aqchff61.jpg?width=256&height=256&crop=256:256,smart&s=3078e8c7548842849af2268366fb5d2892e65d5d'
										alt=''
										className='w-12 rounded-full'
									/>
									<div className='absolute bottom-0 right-0 bg-gradient-to-r from-yellow-400 to-pink-500 w-4 h-4 rounded-full flex items-center justify-center'>
										<button title='follow r/wordaround'>
											<FaPlus className='w-2' />
										</button>
									</div>
								</div>
								<div>
									<button
										title='report video'
										className='bg-gray-500 cursor-pointer text-xl rounded-full p-2 border border-gray-400'>
										<FaFlag />
									</button>
								</div>

								<div>
									<button
										title='share video'
										className='bg-gray-500 cursor-pointer text-xl rounded-full p-2 border border-gray-400'>
										<FaShare />
									</button>
								</div>

								<div className='flex flex-col bg-gray-500 p-1 gap-2 items-center rounded-full'>
									<button className='hover:text-green-600 p-1'>
										<FaArrowUp />
									</button>
									<span className='text-sm font-semibold'>
										433
									</span>
									<button className='hover:text-red-600 p-1'>
										<FaArrowDown />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='grid'>
						{/* user comments */}
						<ul className='py-4 text-white'>
							<li className='flex items-start gap-4 mx-3 rounded p-1 w-96 text-base hover:bg-gray-700'>
								<div className='bg-white rounded-full w-10'>
									<img
										src='https://styles.redditmedia.com/t5_4or7qt/styles/profileIcon_snoo9afd912e-7a7f-4027-a44f-7f664a993ce6-headshot.png?width=256&height=256&crop=256:256,smart&s=ac6a3f3e1bc92726295854159fbb7028ecb49dfa'
										alt=''
									/>
								</div>
								<div className='relative'>
									<div className='bg-gray-800 w-max p-1 px-2 rounded-lg absolute right-0 flex gap-2 text-xs'>
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
									<div className='flex items-center font-bold'>
										<h2>fruitraja</h2>
										<span className='text-xs pl-2 text-gray-300'>
											1 hour ago
										</span>
									</div>
									<p>
										are u russian or italian or something
										else?
									</p>
								</div>
							</li>
						</ul>

						{/* form to post comment */}
						<form className='self-end flex items-center w-full px-3'>
							<div className='flex-1'>
								<label htmlFor='comment' className='hidden'>
									Comment
								</label>
								<input
									type='text'
									name='comment'
									id='comment'
									placeholder='Send message (250 character limit)'
									className='border border-gray-500 bg-gray-700 py-2 px-4 text-white rounded-full w-full'
								/>
							</div>
							<button className='bg-gray-800 py-2 px-4 rounded-xl ml-2 my-2'>
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
