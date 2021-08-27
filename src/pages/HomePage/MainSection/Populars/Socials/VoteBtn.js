import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

const VoteBtns = () => {
	return (
		<div className='flex items-center gap-1'>
			<button className='hover:text-green-700 hover:bg-gray-200'>
				<FaArrowUp className='text-xl' />
			</button>
			<span className='text-sm font-semibold'>20.4k</span>
			<button className='hover:text-red-700 hover:bg-gray-200'>
				<FaArrowDown className='text-xl' />
			</button>
		</div>
	)
}

export default VoteBtns
