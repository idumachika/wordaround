import { useState } from 'react'
import { FaFire, FaSort, FaSun } from 'react-icons/fa'

const FilterPosts = () => {
	return (
		<div className='bg-white mt-2 rounded border sm:text-sm'>
			<div className='p-3 px-4 flex items-center gap-4'>
				<button
					type='button'
					className='flex items-center gap-1 bg-gray-50 py-1 px-3 rounded-full hover:bg-gray-200 active:scale-90 focus:ring-0'>
					<FaFire className='text-secondary' />
					<span className='font-bold text-secondary inline-block'>
						Hot
					</span>
				</button>

				<button
					type='button'
					className='flex items-center gap-1 bg-gray-50 py-1 px-3 rounded-full hover:bg-gray-200 focus:ring-0'>
					<FaSun className='text-secondary' />
					<span className='font-bold text-secondary inline-block'>
						New
					</span>
				</button>

				<button
					type='button'
					className='flex items-center gap-1 bg-gray-50 py-1 px-3 rounded-full hover:bg-gray-200 focus:ring-0'>
					<FaSort className='text-secondary' />
					<span className='font-bold text-secondary inline-block'>
						Top
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
