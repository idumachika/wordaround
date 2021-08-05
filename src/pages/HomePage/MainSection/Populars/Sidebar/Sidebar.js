import Communities from './Communities'
import Instructions from './Instructions'
import Tags from './Tags'

const Sidebar = () => {
	return (
		<aside className='w-2/5'>
			<div className=' bg-white rounded overflow-hidden'>
				<div className='bg-gray-600 h-20 px-4 pb-2'>
					<h2 className='flex items-end h-full'>
						<a href='#' className='text-white font-semibold'>
							Communities Next You
						</a>
					</h2>
				</div>
				<Communities />
				<div className='flex justify-center mx-4 mt-2'>
					<a
						href='#'
						className='w-full text-white font-semibold text-sm bg-secondary p-1 text-center rounded-full hover:opacity-90'>
						View all
					</a>
				</div>

				<Tags />
			</div>

			<Instructions />

			{/* <div className='flex items-center mt-10 '>
				<button className='btn bg-secondary text-white mx-auto'>
					Back to top
				</button>
			</div> */}
		</aside>
	)
}

export default Sidebar
