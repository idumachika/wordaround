import { FaCheckCircle, FaTimes } from 'react-icons/fa'

const SucessAlert = () => {
	return (
		<div className='bg-green-50 border border-green-300 flex items-center px-1 py-1 rounded-lg  gap-2 absolute bottom-2'>
			<div className='p-2 rounded-xl bg-green-500'>
				<FaCheckCircle className='text-white' />
			</div>
			<p>Oh wow, welcome!</p>

			<button
				type='button'
				className='p-1 rounded-lg ml-6 hover:bg-white'>
				<FaTimes />
			</button>
		</div>
	)
}

export default SucessAlert
