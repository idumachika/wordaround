import { FaFire, FaSort, FaSun } from 'react-icons/fa'

const FilterPosts = () => {
	return (
		<div className='bg-white mt-2 rounded border'>
			<div className='p-3 px-4'>
				<button className='flex items-center gap-1 bg-gray-100 py-1 px-3 rounded-full hover:bg-gray-300'>
					<FaFire className='text-secondary text-xl' />
					<span className='font-semibold text-secondary inline-block'>
						Hot
					</span>
				</button>
			</div>

			{/* <button>
				<FaSun />
				<span>New</span>
			</button>
			<button>
				<FaSort />
				<span>New</span>
			</button> */}
		</div>
	)
}

export default FilterPosts
